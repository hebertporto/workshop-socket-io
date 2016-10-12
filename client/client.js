const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
	console.log('Conectado ao Server');
});

socket.on('go event', function(data){
	console.log('Dados Recebidos do Server', data)
});

socket.on('disconnect', function(){
	console.log("Desconectado");
});