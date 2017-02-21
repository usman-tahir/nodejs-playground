(function () {
  'use strict';
  
  var http = require('http'),
    message = 'Hello, World!\n',
    server;
  
  server = http.createServer(function (request, response) {
    response.writeHead(200);
    response.end(message);
  });
  server.listen(8080);
  
  /*
    Test in new CLI tab with `curl localhost:8080`
  */
}());