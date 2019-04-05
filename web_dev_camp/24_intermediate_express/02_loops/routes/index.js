var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET cond page. */
router.get('/cond/:thing', function (req, res, next) {
  let thing = req.params.thing;
  res.render('cond', { thingVar: thing });
});

/* GET loop page. */
router.get('/loop/:post', function (req, res, next) {
  let posts = [{ english: 'one', spanish: 'uno' },
  { english: 'two', spanish: 'dos' },
  { english: 'three', spanish: 'tres' }]
  res.render('loop', { postVar: posts });
});

module.exports = router;
