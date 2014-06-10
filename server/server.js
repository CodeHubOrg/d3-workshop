var express = require('express'),
    http = require('http');

// Settings
var rootFolder = __dirname + '/../client/';
var httpPort = 3000;

// Start the server
var app = express();
app.use(express.static(rootFolder));
http.createServer(app).listen(httpPort);
