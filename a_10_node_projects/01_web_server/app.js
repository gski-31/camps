/*
// BASIC WEB SERVER COPIED FROM NODE SITE
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// END COPY
*/

// npm install express --save

const express = require('express');
const app = express();
const path = require('path'); // core module, no need to install  // used for static paths
const bodyParser = require('body-parser');

// BODY PARSER REQUIRES MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// SET STATIC PATH / MIDDLEWARE

app.use(express.static(path.join(__dirname, 'public')));  // sets a path for static files

app.get('/users', (req,res)=>{
    let users = [  // json object
        {
        fist_name: "Jason",
        last_name: "Gralinski",
        birthday: 0228,
        },
        {
        fist_name: "Regan",
        last_name: "Gralinski",
        birthday: 0224,
        },
        {
        fist_name: "Emma",
        last_name: "Gralinski",
        birthday: 0325,
        }
    ];
    res.json(users);
});

app.get('/download', (req,res)=>{
    res.download(path.join(__dirname, 'public/downloads/vader.jpg')) // set a download path
});

app.get('/aboot', (req,res)=>{
    res.redirect('about.html') // redirect
});

// for post need to npm install body-parser --save
app.post('/subscribe', (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;  // comes from form collection
    console.log(`${name} subscribed with ${email}`)
});

/*
app.get('/', function(req, res) {  // route followed by function
    res.send('this is from res.send')
})

app.get('/about', (req, res) => {  // arrow function
    res.send('<p>about</p>')
})

app.get('/user/:name', (req, res) => {  // dynamic route
    let name = req.params.name;
    res.send(`this page is about <h1>${name}</h1>`)
})

app.get('/about', (req, res) => { // arrow function
    res.send('<p>about</p>')
})
*/

app.listen(3000, function(){
    console.log('server 3000');
});



















