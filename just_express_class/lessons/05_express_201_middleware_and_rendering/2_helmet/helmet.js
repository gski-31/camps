const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.post('/ajax', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.send('Test');
});

app.listen(3000, function () {
    console.log('running on 3000');
});