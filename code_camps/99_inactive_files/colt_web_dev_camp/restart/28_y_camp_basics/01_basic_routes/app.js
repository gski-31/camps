const express = require('express');
const app = express();
const helmet = require('helmet');
const request = require('request')

app.use(helmet());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let campgrounds = [
    {name: 'salmon creek', image: 'https://loremflickr.com/g/320/240/camping?random=1'},
    {name: 'tuna lake', image: 'https://loremflickr.com/g/320/240/camping?random=2'},
    {name: 'yellowtail trail', image: 'https://loremflickr.com/g/320/240/camping?random=3'}
];

app.get('/', (req, res, next)=>{
    res.render('landing');
});

app.get('/campgrounds', (req, res, next)=>{
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('*', (req, res, next)=>{
    res.send('nope');
});

app.listen('3000', (req, res, next) => {
    console.log('running on 3000')
});