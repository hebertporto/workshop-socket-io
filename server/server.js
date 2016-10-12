


const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(socket){
	console.log("Server ON");
	
  socket.emit('go event', {status: "Mensagem From Server"});


});

server.listen(3000);