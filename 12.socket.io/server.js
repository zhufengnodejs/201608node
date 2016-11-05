var express = require('express');
var path = require('path');
var log = console.log;
var app = express();
app.get('/',function(req,res){
    //resolve是得到一个文件的绝对路径
    res.sendFile(path.resolve('index.html'));
});
//node_modules/socket.io-client/socket.io.js
/*
app.get('/socket.io/socket.io.jss',function(req,res){
  res.sendFile(path.resolve('../node_modules/socket.io-client/socket.io.js'),{root:__dirname});
});
*/

var server = require('http').createServer(app);
//io = websocket 服务器端实例
var io = require('socket.io')(server);
//监听客户端的请求，请求到达服务器的时候执行回调函数，并传递为此连接创建socket对象
io.on('connection',function(socket){
   socket.send('欢迎你客户端');
   //socket.emit('message','欢迎你客户端');
   //监听客户端发过来的消息
   socket.on('message',function(msg){
     log(msg);
   });
});
server.listen(8080);