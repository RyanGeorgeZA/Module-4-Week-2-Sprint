// we use require() method to include the HTTP module, which is built into node.js
var http = require("http");

//we use createServer() method in order to create an HTTP server
http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "text/html"}); //writing a response to the client
    res.end("Welcome to Mzamomtsha Primary's School's website server"); //ending the response
}).listen(8080); // the server object will listen on port 8080

console.log("Server is running at http://127.0.0.1:8080/");