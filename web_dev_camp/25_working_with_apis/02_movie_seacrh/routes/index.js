var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/search', function(req, res, next) {
//   res.render('search', { title: 'Express' });
// });

// router.get('/results', function (req, res, next) {
//   request('http://www.omdbapi.com/?apikey=thewdb&s=force&plot=full', function (error, response, body) {  // searched api for "star"
//         var results = JSON.parse(body) // turn results into JSON object
//         res.send(results["Search"][0]);  // can add ["Title"], etc. to be broken down further
//   });
// });

router.get('/results', function (req, res, next) {
  request('http://www.omdbapi.com/?apikey=thewdb&s=star%20wars&plot=full', function (error, response, body) {  // searched api for "star"
        var data = JSON.parse(body) // turn results into JSON object
        res.render("results", {data: data});  // can add ["Title"], etc. to be broken down further
  });
});

module.exports = router;
