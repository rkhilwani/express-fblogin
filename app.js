var express = require('express');
var session = require('express-session');
var https = require('request');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(3000, function(){
    console.log('server started and listening to port 3000....');
});