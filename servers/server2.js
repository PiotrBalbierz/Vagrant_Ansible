var express = require('express');
var app = express();
var fs = require("fs");

var newMovies = {
   "movie4" : {
      "title" : "Hobbit",
      "id": 4
   }
}

app.post('/addMovie', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       movies = JSON.parse(data);
       movies["movie4"] = newMovies["movie4"];
       console.log(movies);
       res.end(JSON.stringify(movies));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log("Adres serwera: http://%s:%s", host, port);
})