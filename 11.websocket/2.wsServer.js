var Server = require('ws').Server;
var server = new Server({port:9090});
//监听客户端的连接，当连接到来的时候执行回调函数
//socket 是每个客户端连接上来之后为它量身创建的
server.on('connection',function(socket){
    //向客户端发送消息
    socket.send('客户端你好呀');
    //监听客户端收到的消息
    socket.on('message',function(msg){
        console.log(msg);
    });
});