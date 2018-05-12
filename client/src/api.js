import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

function initSocket(callback) {
  socket.on('connect', () => {
    callback('connected to server');
  });
  socket.on('disconnect', () => {
    callback('Disconnected from server');
  });
  socket.on('message', (data) => {
    callback(data);
  });
}

export { initSocket };
