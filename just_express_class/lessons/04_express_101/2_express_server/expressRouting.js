const express = require('express');
const app = express();

// app object has many methods (get, post, delete, put aka 'HTTP verbs'
// CRUD Correspondence //  get = READ, post = CREATE, delete - delete, put = UPDATE
// all methods take a path, and req res callback

app.get('/',(req, res)=>{
    // console.log(req);
    res.send('<h1>GET hola</h1>');
});

app.post('/', (req, res) => {
    res.send('<h1>POST hola</h1>'); // Doesn't do much in example but can check in POSTMAN
});

app.listen(3000, function () {
    console.log('running on 3000');
});
