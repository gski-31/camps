var express = require('express');
var router = express.Router();

// npm install request to work with APIs
const request = require('request');

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

// add to local so accesible everywhere
router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
})


/* GET home page. */
router.get('/', function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // request.get takes 2 args:
    // 1. it takes the URL to http "get"
    // 2. the callback to run when the http response is back. 3 args:
    //   1. error (if any)
    //   2. http response
    //   3. json/data the server sent back
    const parsedData = JSON.parse(movieData);
    // Send JSON version to browser
    // res.json(parsedData);
    res.render('index', {
      parsedData: parsedData.results
    })
  })
});


// /movie/:id is a wildcard route.
// that means that :id is going to be stored in...
router.get('/movie/:id', (req, res, next) => {
  // res.json(req.params.id);  // displays movie id on page as test
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  // res.send(thisMovieUrl);  // displays movie url
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('single-movie', {
      parsedData: parsedData
    })
  })
})

router.post('/search', (req, res, next) => {
  // res.send('testing?')
  const userSearchTerm = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;
  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;
  request.get(movieUrl, (error, response, movieData) => {
    let parsedData = JSON.parse(movieData)
    if (cat == 'person') {
      parsedData.results = parsedData.results[0].known_for;
    }
    res.render('index', {
      parsedData: parsedData.results
    })
  })
})

module.exports = router;