var connection = new WebSocket('ws://IPAddress:Port');
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};
