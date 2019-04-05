var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search');
});

router.get('/results', function(req, res, next) {
  var newSearch = req.res.query;
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + newSearch;
  req(url, function(body, error, response){
  var data = JSON.parse(body);
    res.render('results', { data: data });
  });
});

module.exports = router;