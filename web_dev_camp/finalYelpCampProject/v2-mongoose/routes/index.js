var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/happy_campers");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//   name: "Bill Murray",
//   image: "https://fillmurray.com/200/300"
// });

// var campgrounds = [
//   { name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg" },
//   { name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg" },
//   { name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg" }
// ];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('landing');
});

router.get('/campgrounds', function (req, res, next) {
  // res.render('campgrounds', { campgrounds: campgrounds });
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err)
    } else {
      res.render("campgrounds", { campgrounds: allCampgrounds });
    }
  });
});

router.post('/campgrounds', function (req, res, next) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

router.get('/campgrounds/new', function (req, res, next) {
  res.render('new');
});

module.exports = router;