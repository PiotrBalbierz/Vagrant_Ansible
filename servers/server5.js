var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(jsonParser);

app.post('/addMovie', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        movies = JSON.parse(data);
        movieKey = Object.keys(req.body)[0];
        movies[movieKey] = req.body[movieKey];
        console.log(movies);
        res.end(JSON.stringify(movies));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Adres serwera: http://%s:%s", host, port);

})