// Required packages below
var path = require("path");
var fs = require("fs");
var express = require("express");

// Create app
var app = express();

// View Engine
app.set("view engine", "html");
app.engine('html', function (paths, options, callbacks){
    fs.readFile(path, "utf-8", callback);
});

// Middleware
app.use(express.static(__dirname));

// Routes
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

// Error Handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
});

// Serve App
var port = 8000;
app.listen(port, function(){
    console.log('running at localhost:' + port);
});