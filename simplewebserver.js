// Import modułu http
var http = require("http");

http.createServer(function (request, response) {
   // Wysłanie nagłówka HTTP
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Wysłanie danych (tekstu)
   response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');