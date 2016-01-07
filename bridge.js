var osc = require('node-osc'),
    io = require('socket.io').listen(8081);

var oscServer, oscClient;
oscServer = new osc.Server(3333, "192.168.1.74");
oscClient = new osc.Client("192.168.1.74", 3334);

io.sockets.on('connection', function (socket) {
  socket.on("message", function (obj) {
      console.log(obj);
      oscClient.send(obj);
  });
});
