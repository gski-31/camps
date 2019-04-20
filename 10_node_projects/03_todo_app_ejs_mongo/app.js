// if no express gen ,save this base as a snippet

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Init app
const app = express();

// get mongo rolling
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/todoapp';

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// connect to mongo
MongoClient.connect(url, (err, datbase)=> {

});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server running on port 3K');
});
