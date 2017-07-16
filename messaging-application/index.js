
var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    messages = ['testing'],
    clients = [];

// Create the HTTP server
http.createServer(function (request, response) {
  response.end('hello world');
}).listen(8080, 'localhost');
console.log('server running');
