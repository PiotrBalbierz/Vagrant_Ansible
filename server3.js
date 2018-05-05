var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      var films = JSON.parse( data );
      var film = films["film" + req.params.id];
      console.log(film);
      res.end( JSON.stringify(film));
   });
})

var server = app.listen(8081, function () {

   var host = server.address().address;
   var port = server.address().port;
   console.log("Adres serwera: http://%s:%s", host, port);

})