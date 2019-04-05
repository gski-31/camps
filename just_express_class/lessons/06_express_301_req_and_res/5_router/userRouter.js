// router lives here

const express = require('express');  // new file requires express reload
let router = express.Router();  // express object

// similar to app.get
router.get('/', (req, res, next) => {
    res.json({
        msg: 'user router works'
    })
})

module.exports = router;