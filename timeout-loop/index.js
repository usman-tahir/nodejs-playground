(function () {
  'use strict';

  // set the function to be called after one second
  setTimeout(function () {
    console.log('timeout ran at: ' + new Date().toTimeString());
  }, 1000);

  // store the start time
  var start = new Date();
  console.log('entering loop at: ' + start.toTimeString());

  // run a loop for 4 seconds
  var i = 0;
  while (new Date().getTime() < start.getTime() + 4000) {
    i += 1;
  }

  console.log('exit loop at: ' + new Date().toTimeString() + '; ran ' + i + ' iterations.');
}());
