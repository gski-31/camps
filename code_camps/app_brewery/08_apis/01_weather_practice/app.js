const express = require('express');
const https = require('https'); // request is deprecated
const bodyParser = require('body-parser'); // grabs data from post request

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
        const apiKey = '90fd2be886aa419897b92fd1a5876294';
        const city = req.body.cityName;
        const units = 'imperial';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
        https.get(url, response => {
                response.on('data', data => {
                        const weatherData = JSON.parse(data);
                        const tempr = weatherData.main.temp;
                        const condition = weatherData.weather[0].description;
                        const city = weatherData.name;
                        const icon_url = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
                        res.send(
                                `<h1>it is ${tempr} degrees with ${condition} in ${city}</h1><br><img src="${icon_url}" />`
                        );
                });
        });
});
/*
       // break the api query string to include variables
       const apiKey = '90fd2be886aa419897b92fd1a5876294';
       const city = 'Glendale';
       const units = 'imperial';
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
       // const url =
       //         'https://api.openweathermap.org/data/2.5/weather?lat=34.1653974&lon=-118.2615205&appid=90fd2be886aa419897b92fd1a5876294&units=imperial';

       https.get(url, response => {
               // use "response to not contradict "res" above
               // console.log(response.statusCode);
               response.on('data', data => {
                       const weatherData = JSON.parse(data);
                       const { temp } = weatherData.main;
                       const condition = weatherData.weather[0].description;
                       const city = weatherData.name;
                       const icon_url = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
                       res.send(
                               `<h1>it is ${temp} degrees with ${condition} in ${city}</h1><br><img src="${icon_url}" />`
                       );
               });
       });

       // res.send('running'); // can only have 1 res.send
*/
app.listen(PORT, () => {
        console.log('Listening on port 3000');
});
