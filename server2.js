var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "film4" : {
      "title" : "Hobbit",
      "id": 4
   }
}

app.post('/addFilm', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["film4"] = user["film4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log("Adres serwera: http://%s:%s", host, port);
})