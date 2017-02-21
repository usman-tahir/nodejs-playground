(function () {
  'use strict';
  
  var fs = require('fs'),
    data = fs.readFileSync('./input.txt');
  
  console.log(data.toString());
}());