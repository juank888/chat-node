var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 9000;
  
app.get('/',function(req,res){
   res.sendFile(__dirname + '/index.html');
});
  
io.on('connection',function(socket){
 
   socket.on('message',function(msj){
      io.sockets.emit('message',msj);
   });
});
http.listen(PORT,function(){
  console.log('el servidor esta escuchando el puerto %s',PORT);
  console.log("Sirpa_limachi_juan_carlos_6176510");
});