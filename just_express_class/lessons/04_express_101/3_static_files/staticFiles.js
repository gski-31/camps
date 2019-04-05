const express = require('express');
const app = express();

// app comes with a use method // middleware
// use take a single argument // right now // which is the middleware you want to return

app.use(express.static('public'));  // localhost:300 file name will now show

app.listen(3000, function () {
    console.log('running on 3000')
});