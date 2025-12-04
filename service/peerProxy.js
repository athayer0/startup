const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  // Function to broadcast current user count to all clients
  function broadcastUserCount() {
    const count = socketServer.clients.size;
    const message = JSON.stringify({ type: 'userCount', count: count });
    
    socketServer.clients.forEach((client) => {
      if (client.readyState === 1) { // 1 = WebSocket.OPEN
        client.send(message);
      }
    });
  }

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;

    // Send updated user count when someone connects
    broadcastUserCount();

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });

    // Send updated user count when someone disconnects
    socket.on('close', () => {
      broadcastUserCount();
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };
