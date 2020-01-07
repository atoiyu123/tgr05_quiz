var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('test build');
}).listen('202.139.192.75')

console.log("server");