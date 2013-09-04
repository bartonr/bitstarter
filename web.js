var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 8080;
app.use("/static",express.static(__dirname+"/static"));
app.listen(port, function() {
  console.log("Listening on " + port);
});
