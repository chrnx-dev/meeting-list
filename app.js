'use strict';

var express = require('express'),
	path = require('path'),
	app = express(),
	http = require('http').Server(app),
	socket = require('socket.io')(http);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});


socket.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

