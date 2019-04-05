const express = require('express');
const router = express.Router();  // name router can be changed to thing it is routing for, ala pages

router.get('/', function(req, res, next) {
res.render('index', { title: 'PAGES' });
// http://localhost:3000/pages will show pages
});


router.get('/:bob', function (req, res, next) {
    res.render('index', { title: req.params.bob });  // params can be anything, bob, id, etc.
    // http://localhost:3000/pages/3 will show 3
});

module.exports = router;
