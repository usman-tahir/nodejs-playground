
var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    counter = 0,
    poll;

http.createServer(function (request, response) {
  var urlParts = url.parse(request.url);
  console.log(urlParts);

  if (urlParts.pathname == '/') {
    // serve the index.html file
    fs.readFile('./index.html', function (error, data) {
      response.end(data);
    });
  } else if (urlParts.pathname.substr(0, 5) == '/poll') {
    poll = function () {
      $.getJSON('/poll/' + counter, function (response) {
        var element = $('#output');

        counter = response.count;
        element.text(element.text() + response.append());
        poll();
      });
    }
    poll();
  }
}).listen(8080, 'localhost');
console.log('server running');
