// application level stuff goes here

const express = require('express');
const app = express();
const helmet = require('helmet');

// main top level stuff
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

// use json for play, no need for ejs

// routes
const router = require('./theRouter');  //const MUST go before use
const userRouter = require('./userRouter');

app.use('/', router);
app.use('/user', userRouter);


app.listen(3000);