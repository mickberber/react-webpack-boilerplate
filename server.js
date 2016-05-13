var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));
app.use('/src/assets', express.static(__dirname + '/src/assets'));

app.get('/', function(req, res) {
  res.send(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
  console.log('Listening at :' + port);
});
