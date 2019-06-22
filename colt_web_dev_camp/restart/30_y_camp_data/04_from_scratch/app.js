const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/04_from_scratch');

// LANDING
app.get('/', (req, res, next)=>{
    res.render('index');
});

// INDEX
app.get('/sushi', (req, res, next)=>{
    res.render('sushi');
});

// NEW
app.get('/sushi/new', (req, res, next) => {
    res.render('new');
});

// CREATE
app.post('/sushi', (req, res, next) => {
    res.render('sushi');
});

// SHOW
app.get('/sushi/:id', (req, res, next) => {
    res.render('sushi');
});

app.get('*', (req, res, next)=>{
    res.send('NoPe');
});

app.listen('3000', (req, res, next)=>{
    console.log('all good on 3k')
})