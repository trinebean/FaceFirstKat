var express = require('express');
var app = express();
var path = require('path');

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/cameratest.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/cameratest.html'));
});



app.get('/',function(req,res) {
    res.send("Hello World");

});




app.listen(4000);