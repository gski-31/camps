const express = require('express');
const app = express();

// 'all' is a method with route and callback arguments

app.all('*', (req, res) => {
    res.send('<h1>Home Page');
});

app.listen(3000, function () {
    console.log('running on 3000');
});