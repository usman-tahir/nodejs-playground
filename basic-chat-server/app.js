(function () {
  'use strict';
  
  var net = require('net'),
    port = 3000,
    chatServer = net.createServer();
  
  console.log('Started up the chat server...');
  chatServer.on('connection', function (client) {
    
    client.write('Hi!\n');
    client.write('Bye!\n');
    client.end();
  });
  
  console.log('Listening on port', port, '...');
  chatServer.listen(port);
}());