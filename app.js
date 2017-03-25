var express = require('express');
var twitter = require('twitter');
var app = express();

app.listen(8080);

var twit = new twitter({
  // credentials
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});

module.exports = app;
