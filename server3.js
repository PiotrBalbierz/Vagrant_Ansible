var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      var movies = JSON.parse(data);
      var movie = movies["movie" + req.params.id];
      console.log(movie);
      res.end( JSON.stringify(movie));
   });
})

var server = app.listen(8081, function () {

   var host = server.address().address;
   var port = server.address().port;
   console.log("Adres serwera: http://%s:%s", host, port);

})