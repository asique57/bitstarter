var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
var readFile = function(filename) {
    return fs.readFileSync(filename);
};
app.get('/', function(request, response) {
  response.send('Hello World2!');
  //  var buf = readFile('index.html');
  //  response.send(readFile(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
