var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.delete('/deleteFilm', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       films = JSON.parse(data);
       delete films["film" + 2];
       console.log(data);
       res.end(JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Adres serwera: http://%s:%s", host, port);
})