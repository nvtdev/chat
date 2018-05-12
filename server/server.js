const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../client-react');
const port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('message', generateMessage('Admin', 'Welcome to the chat!'));

  socket.broadcast.emit('message', generateMessage('Admin', 'New user joined'));

  socket.on('message', (message, callback) => {
    console.log('createMessage', message);

    io.emit('message', generateMessage(message.from, message.text));
    callback('Data received.');
  });



  socket.on('disconnect', () => {
    console.log('User got disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is up on ${port}');
});
