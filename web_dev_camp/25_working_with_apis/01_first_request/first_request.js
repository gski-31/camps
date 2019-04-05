var request = require('request');

request('http://www.google.com', function (error, response, body) {  // goes on all request similar to req, res, next
    console.log('Stuff done broke:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});