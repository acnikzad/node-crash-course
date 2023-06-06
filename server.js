const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html')
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<h1>hello, ninjas</h1>');
    res.write('<p>hello again, ninjas</p>');
    
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});