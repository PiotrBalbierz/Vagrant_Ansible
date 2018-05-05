var fs = require("fs");

var data = fs.readFileSync('dane.txt');

console.log(data.toString());
console.log("Koniec!");