// Create express application
var express = require('express');
var app = express();

// Serving static files (http://expressjs.com/starter/static-files.html)
app.use(express.static(__dirname + '/public'));
// Routing for express (http://expressjs.com/guide/routing.html)
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/views/home.html');
});

// Start app and listen on port 3000 for connections
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});