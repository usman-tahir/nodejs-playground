(function () {
  'use strict';
  
  var events = require('events'),
    eventEmitter = new events.EventEmitter(),
    connectHandler;
  
  connectHandler = function connected() {
    console.log('connection successful.');
    eventEmitter.emit('data_received');
  }
  
  eventEmitter.on('data_received', function () {
    console.log('data received successfully.');
  });
  
  eventEmitter.on('connection', connectHandler);
  
  eventEmitter.emit('connection');
  
  console.log('program ended.');
}());