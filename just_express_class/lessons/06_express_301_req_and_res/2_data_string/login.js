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

app.use((req,res,next)=>{
    if(req.query.msg === 'fail'){
        res.locals.msg = 'sorry, WRONG!!!!!'
    } else {
        res.locals.msg = ''
    }
    next();
})

app.get('/login', (req, res, next) => {
    //rec object has a query param
    // req.query is an obj with EVERY key in query string
    // console.log(req.query);
    res.render('login');
});

app.post('/process_login', (req, res, next) => {
    const password = req.body.password;
    const username = req.body.username;
    if (password === 'x') {
        res.cookie('username', username);
        res.redirect('/welcome');
    } else {
        res.redirect('login?msg=fail&test=hello');
    }
});

app.get('/welcome', (req, res, next) => {
    res.render('welcome', {username: req.cookies.username}
    );
});

app.get('/logout', (req, res, next) => {
    req.clearCookie('username');
    res.redirect('/login');
})

app.listen(3000, function () {
    console.log('running on 3000');
});