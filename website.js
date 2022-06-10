

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 4000;

//create a server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>ABOUT Page</h1> <p>I am learning node js which is very popular language.</p>');
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Page</h1> <p>I am learning node js which is very popular language. </p>');
    }
    else if (req.url == '/product') {
        res.statusCode = 200;
        res.end('<h1>Product Page</h1> <p>I am learning node js which is very popular language. </p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>not found</h1>');
    }

});

//server to listen the request
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});