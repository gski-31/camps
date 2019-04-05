var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search');
});

router.get('/results', function (req, res, next) {
  var newSearch = req.query.movieSearch;
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + newSearch;
  request(url, function (error, response, body) {
    var data = JSON.parse(body);
    res.render('results', { data: data });
  })
});

module.exports = router;
