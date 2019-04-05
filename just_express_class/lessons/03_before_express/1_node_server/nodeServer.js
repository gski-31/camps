// http is native to node, no package required
const http = require('http');

// the http module has a createServer method
// it takes one argument
// that argument is a callback, the callback, has two arguments: req & res

const server = http.createServer((req,res)=>{
    // console.log(req)
    // res = response to the req
    // http message
        // 1. start-line - Node takes care of
        // 2. header
            // writeHead takes 2 args:
                // 1. status code
                // 2. object for the mime-type
        res.writeHead(200, { 'content-type': 'text/html' });
        // 3. body
        res.write('<h1>hola</h1>');
        // 4. close connection
        res.end();
});

// createServer returns an object with a listen method
// listen takes one argument
// one port to listen for http traffic on

server.listen(3000);