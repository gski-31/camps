const express = require('express');
const helmet = require('helmet');
const app = express();

const path = require('path');

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next)=>{
    res.render('index', {
        msg: 'bingo' // object can be sent to ejs render file
    });
});

app.listen(3000, function () {
    console.log('running on 3000');
});