const socket = io();

let btn = document.getElementById('btn');
btn.onclick = function exec() {
  socket.emit('from_client');
};

socket.on('from_server', () => {
  console.log('Message from server');
  const message = document.createElement('div');
  message.textContent = 'Message from server';
  document.body.appendChild(message);
});