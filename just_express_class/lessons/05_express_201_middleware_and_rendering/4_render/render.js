const express = require('express');
const helmet = require('helmet');
const app = express();

const path = require('path');  // path for sub directory files

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

// app.get('/', (req, res, next)=>{
//     res.send('<h2>Hola</h2>');
// });

// res.render round trip
// 01. Setup Express as usual
// 02. Define View Engine (EJS, MUSTACHE, HANDLEBARS, JADE/PUG);
// 03. Put res.render in a route
// 04. Pass res.render a file to use(ejs, handlebars, etc...) and data to use
// 05. Express use the node module/data for/from engine and parses the file
// 06. Compile for browser(HTML, CSS, JS)

app.set('view engine', 'ejs'); // set view engine // be sure to npm install view engine
app.set('views', path.join(__dirname, 'views'));  // can be put in an array for multiple paths

app.get('/',(req, res, next)=>{
    res.render('index');  // place ejs files in 'views' folder // or use path join in app.set to choose different folder
});


app.listen(3000, function () {
    console.log('running on 3000');
});