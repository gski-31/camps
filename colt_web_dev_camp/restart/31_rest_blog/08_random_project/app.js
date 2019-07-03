const   express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        methodOverride = require('method-override'),
        expressSanitizer = require('express-sanitizer');

app.use(express.static('public'));
app.use(express.urlencoded, {extended: true});
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// MONGOOSE SETUP
mongoose.connect('mongodb://localhost/char_proj', {useNewUrlParser: true});

let characterSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type: Date, default: Date.now()}
});

let Character = mongoose.model('Character', characterSchema);

// REST ROUTES

// INDEX
app.get('/character', (req, res, next)=>{
    res.render('index');
});

// INDEX REDIRECT
app.get('/', (req, res, next) => {
    res.redirect('/index');
});

// NEW
app.get('/character/new', (req, res, next) => {
    res.render('new');
});

// CREATE
app.post('/character', (req, res, next) => {
    res.redirect('/index');
});

// SHOW
app.get('/character/:id', (req, res, next) => {
    res.render('show', {stuff: stuff});
});

// EDIT
app.get('/character/:id/edit', (req, res, next) => {
    res.render('edit', {stuff: stuff});
});

// UPDATE
app.put('/character/:id', (req, res, next) => {
    res.redirect('/character/' + req.params.id);  // :id
});

// DESTROY
app.delete('/character/:id', (req, res, next) => {
    res.redirect('/character');
});

// 404 & SERVER
app.get('*', (req, res, next) => {
    res.send('nope :(');
});

app.listen('3000', (req, res, next) => {
    console.log('running on 3k')
});






















