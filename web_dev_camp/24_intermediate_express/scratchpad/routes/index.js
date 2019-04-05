var express = require('express');
var router = express.Router();


var names = ['regan', 'jason', 'emma', 'copper', 'daisy', 'knobi', 'squirt']

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_name', function(req, res, next) {
  var newName = req.body.newName;
  names.push(newName);
  res.redirect('loop');
});

router.get('/loop', function(req, res, next) {
  res.render('loop', { names: names });
});

module.exports = router;
