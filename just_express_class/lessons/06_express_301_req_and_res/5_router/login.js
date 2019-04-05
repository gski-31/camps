const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');  // 3rd party module

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    if (req.query.msg === 'fail') {
        res.locals.msg = 'sorry, WRONG!!!!!'  // res.local is an OBJECT all can accesss
    } else {
        res.locals.msg = ''
    }
    next();
})

app.get('/login', (req, res, next) => {
    //rec object has a query param
    // req.query is an OBJECT with EVERY key in query string
    // console.log(req.query);
    res.render('login');
});

app.post('/process_login', (req, res, next) => {
    const password = req.body.password;  // REMINDER: req.body is an OBJECT with tons of data
    const username = req.body.username;
    // Save username in a cookie / later use
    if (password === 'x') {
        res.cookie('username', username);  // var or cookie name, value, in this case username var from req.body
        res.redirect('/welcome');
    } else {
        res.redirect('/login?msg=fail&test=hello');
    }
});



app.get('/welcome', (req, res, next) => {
    res.render('welcome', { username: req.cookies.username }  // req.cookies.username was set above
    );
});


// app.get('/user/:uid', ...)
// app.get('/user/admin/:uid', ...)
// app.get('/user/profile/:uid. ,...)

// in a route, anytime something has a : in front it is a wildcard!
// wildcard, will match anything in that slot

app.get('/story/:id', (req, res, next)=> {
    // the req.params object always exists
    // it will have a property for each wildcard in the route
    res.send(`<h1>Story ${req.params.storyId}</hl>`)
    // res.send(<h1>Story 1</h1>)
})


// ':' in a route is a wildcard
app.get('/story/:storyId', (req, res, next) => {
    // req.params has property for every wildcard in route
    res.send(`<h1>Story ${req.params.storyId}</h1>`);
});

// Can also use multi wildcards
app.get('/story/:storyId/:randomLink', (req, res, next) => {
    res.send(`<h1>Story ${req.params.storyId} of ${req.params.randomLink}</h1>`);
});

app.get('/statement', (req, res, next)=>{
    // res.sendFile(path.join(__dirname,'user_stuff/dv.jpg'))  // opens in browser
    // download method with 2 args, file name, file rename
    res.download(path.join(__dirname, 'user_stuff/dv.jpg'), 'bang.jpg')  // downloads
    // can have a callback as a 3rd arg as well
});


app.get('/logout', (req, res, next) => {
    req.clearCookie('username');  // clearCookie with arg of cookie name
    res.redirect('/login');
});

app.listen(3000, function () {
    console.log('running on 3000');
});