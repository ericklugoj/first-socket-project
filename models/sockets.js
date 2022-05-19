class Sockets {
  constructor(io) {
    this.io = io;
  }

  startSocketsEvents() {
    // Listening new connection
    this.io.on('connection', (socket) => {
      console.log('new client connected');
      // Listening event: message-to-server
      socket.on('message-to-server', (data) => {
        console.log(data);
        this.io.emit('message-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
