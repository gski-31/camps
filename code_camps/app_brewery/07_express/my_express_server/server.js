const express = require('express');

const app = express();

app.get('/', (req, res) => {
        // console.log(req);
        res.send('hola');
});

app.listen(3000, () => {
        console.log('server on 3k');
});
