const express = require('express');
const app = express();

function validateUser(req, res, next){
    // get info out of the req Object
    // do something with DB
    res.locals.validated = true;  // validation technique
    console.log('validated ran');
    next();  // hands off to next piece of middleware
}

app.use(validateUser);

app.get('/', (req, res, next)=>{
    res.send('<h3>Bingo</h3>')
    // next(); doesn't exist here so it terminates
});

app.listen(3000, function () {
    console.log('running on 3000')
});