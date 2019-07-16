//APP SETUP
const   express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        methodOverride = require('method-override'),
        expressSanitizer = require('express-sanitizer'),
        Campground = require('./models/campground'),
        Comment = require('./models/comment'),
        User = require('./models/user');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(expressSanitizer());

// MONGOOSE
mongoose.connect('mongodb://localhost/yelpCamp_refactor_2', {useNewUrlParser: true});

// ROUTES

// --------------------------------------------------------
// Name        Path            HTTP Verb   Purpose
// --------------------------------------------------------
// Index       /blogs           GET         List all blogs
// New         /blogs/new       GET         Show new blog form
// Create      /blogs           POST        Create a new blog, then redirect somewhere
// Show        /blogs/:id       GET         Show info about one specific blog
// Edit        /blogs/:id/edit  GET         Show edit form for one blog
// Update      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
// Destroy     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere

// INDEX ROUTE       /blogs           GET         List all blogs
app.get('/campgrounds', (req, res, next)=>{
    Campground.find({}, (err, all_campgrounds)=>{
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds/index', {campgrounds: all_campgrounds})
        }
    })
})

app.get('/', (req, res, next)=>{
    res.redirect('/campgrounds')
})

// NEW ROUTE         /blogs/new       GET         Show new blog form
app.get('/campgrounds/new', (req, res, next)=>{
    res.render('campgrounds/new');
})

// CREATE ROUTE     /blogs           POST        Create a new blog, then redirect somewhere
app.post('/campgrounds', (req, res, next)=>{
    Campground.create(req.body.campground, (err, new_campground)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

// SHOW ROUTE        /blogs/:id       GET         Show info about one specific blog
app.get('/campgrounds/:id', (req, res, next)=>{
    Campground.findById(req.params.id, (err, found_campground)=>{
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds/show', {campground: found_campground})
        }
    })
})

// EDIT ROUTE        /blogs/:id/edit  GET         Show edit form for one blog
app.get('/campgrounds/:id/edit', (req, res, next)=>{
    Campground.findById(req.params.id, (err, found_campground)=>{
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds/edit', {campground: found_campground})
        }
    })
})

// UPDATE ROUTE      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
app.put('/campgrounds/:id', (req, res, next)=>{
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updated_campground)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/campgrounds/' + req.params.id)
        }
    })
})

// DESTROY ROUTE     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere
app.delete('/campgrounds/:id', (req, res, next)=>{
    Campground.findByIdAndRemove(req.params.id, (err, found_campground) => {
        if(err){
            console.log(err)
        } else {
            res.redirect('/campgrounds')
        }
    })
})

// ADDING COMMENTS IN NESTED ROUTES
//  NEW     campgrounds/:id/comments/new    GET
//  NEW     campgrounds/:id/comments        POST

app.get('/campgrounds/:id/comments/new', (req, res, next) => {
    // find campground by id
    Campground.findById(req.params.id, (err, found_campground)=>{
        if(err){
            console.log(err)
        } else {
            res.render('comments/new', {campground: found_campground});
        }
    })
})

app.post("/campgrounds/:id/comments", (req, res)=> {
    //lookup campground using ID
    Campground.findById(req.params.id, (err, campground)=> {
        if (err) {
            console.log(err);
            // res.redirect("/campgrounds");
        } else {
            //create new comment
            Comment.create(req.body.comment, (err, comment)=> {
                if (err) {
                    console.log(err);
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});

// 404 & SERVER
app.get('*', (req, res, next)=>{
    res.send("<h1>YOU'VE BEEN 404ed</h1>")
})

app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})