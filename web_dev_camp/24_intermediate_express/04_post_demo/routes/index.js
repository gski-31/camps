var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var friends = ['Cooper', 'Daisy', 'Knobi', 'Squirt'] // outside of routes so push works

router.post('/addfriend', function(req, res, next){
  var newfriend = req.body.newfriend;
  friends.push(newfriend);
  res.redirect('/friends');  // redirects to page with added value
});

router.get('/friends', function(req, res, next) {
  res.render('friends', { friends: friends });
});

module.exports = router;