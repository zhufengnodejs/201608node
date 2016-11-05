var Socket = require('ws');
var socket = new Socket('ws://127.0.0.1:9090');
socket.on('open',function(){
    console.log('连接已经成功建立');
    socket.send('服务器你丫好');
});

socket.on('message',function(msg){
    console.log(msg);
});