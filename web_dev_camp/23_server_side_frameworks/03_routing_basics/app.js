let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/bye', (req, res) => {
    res.send('adios');
});

app.get('/dog', (req, res) => {
    res.send('bow-wow');
});

// ROUTE PARAMETERS
app.get('/r/:sub_cat_name', (req, res) => {  // use a : for pattern names, put a : in-front of any variable field
    res.send(`welcome to the ${req.params.sub_cat_name} page`);  // req pulls info about current page/db
});

// STAR ROUTE / CATCH-ALL / DEFAULT / PUT AT END
app.get('*', (req, res) => {
    res.send('default, 404, star route');
});

app.listen(3000, () => {
    console.log('running on 3000')
});
