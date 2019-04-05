const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.post('/process_login', (req, res, next) => {
    // req.body parses the http message from sent data ala urlencoded
    const password = req.body.password;
    const username = req.body.username;
    // check db for valid credentials
    // save user name in cookie
    if (password === 'x') {
        // res.cookie takes 1. a name of cookie and 2. value to set it to
        res.cookie('username', username);
        // res.redirect = where to send browser
        res.redirect('/welcome');  // needs a route below
    } else {
        res.redirect('login?msg=fail');
    }
    res.json(req.body);
});

app.get('/welcome', (req, res, next) => {
    // req.cookies will jave all names for set cookies
    res.render('welcome', {
        username: req.cookies.username  // add cookie parser
    });
});

app.get('/logout', (req, res, next) => {
    req.clearCookie('username');  // must specify cookie
    res.redirect('/login');  // send back to login
})

app.listen(3000, function () {
    console.log('running on 3000');
});