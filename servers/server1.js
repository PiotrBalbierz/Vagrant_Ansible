var express = require('express');
var app = express();
var fs = require("fs");

app.get('/movies', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
   });
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Adres serwera: http://%s:%s", host, port);
})