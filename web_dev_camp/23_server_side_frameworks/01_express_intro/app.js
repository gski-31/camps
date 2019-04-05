let express = require('express');  // require express.js
let app = express(); // name and call

// '/' => 'hello'
app.get('/', function (req, res) { // get root / request and response
    res.send('hello');
});

// '/bye' => 'adios'
app.get('/bye', (req, res) => {
    res.send('adios');
});

//'/dog' => 'bow-wow'
app.get('/dog', (req, res) => {
    res.send('bow-wow');
});

// START SERVER
app.listen(3000, function () {
    console.log('running on 3000')
});
