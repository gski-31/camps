// Index       /blogs           GET         List all blogs
// New         /blogs/new       GET         Show new blog form
// Create      /blogs           POST        Create a new blog, then redirect somewhere
// Show        /blogs/:id       GET         Show info about one specific blog
// Edit        /blogs/:id/edit  GET         Show edit form for one blog
// Update      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
// Destroy     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere

// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// MONGOOSE SETUP
mongoose.connect('mongodb://localhost/dummy_char', {useNewUrlParser: true});

let characterSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type: Date, default: Date.now()}
});

let Character = mongoose.model('Character', characterSchema);

// // CREATE DUMMY DATA
// Character.create({
//     name: 'Punisher',
//     image: 'https://duckduckgo.com/i/6c2bfe2e.jpg',
//     description: "The Punisher is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Gerry Conway and artists John Romita Sr. and Ross Andru, with publisher Stan Lee green-lighting the name. The Punisher made his first appearance in The Amazing Spider-Man #129",
// });

// INDEX ROUTE
app.get('/characters', (req, res, next)=>{
    Character.find({}, (err, all_characters)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index', {characters: all_characters})
        }
    })
})

// NEW ROUTE
app.get('/characters/new', (req, res, next)=>{
    res.render('new');
})

// CREATE ROUTE
app.post('/characters', (req, res, next)=>{
    Character.create(req.body.character, (err, new_charcter)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/characters');
        }
    })
})

app.get('/', (req, res, next)=>{
    res.redirect('/characters');
})

// 404 & SERVER
app.get('*', (req, res, next) => {
    res.send('404 - nope :(');
})

app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})