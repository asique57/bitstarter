var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
var readFile = function(filename) {
var fileData = null;
    fs.readFileSync('index.html',function(err,data) {
	if(err) console.log(err);
	fileData = data;
});
return fileData;
}
app.get('/', function(request, response) {
  //response.send('Hello World2!');
    resonnse.send(readFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
