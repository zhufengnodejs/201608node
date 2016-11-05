var express = require('express');
var path = require('path');
var log = console.log;
var app = express();
app.use(express.static(__dirname));
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
//存放服务器的所有的消息
var messages = [];
//监听客户端的请求，请求到达服务器的时候执行回调函数，并传递为此连接创建socket对象
io.on('connection',function(socket){
    var username;//此客户端的用户名
    //每当客户端连接上来的时候，向客户端发送一个消息
    socket.emit('messages',messages);
    socket.send({username:'系统',content:'请输入呢称!',createAt:new Date()});
   //socket.emit('message','欢迎你客户端');
   //监听客户端发过来的消息
   socket.on('message',function(msg){
       //如果用户已经设置过了，表示正常的发言
       if(username){
           messages.push({username,content:msg,createAt:new Date()});
           //向连接到此服务器上的所有的客户端发送消息
           io.emit('message',{username,content:msg,createAt:new Date()});
       }else{
           username = msg;
           io.emit('message',{username:'系统',content:`欢迎${username}加入聊天室`,createAt:new Date()});
       }

   });
});
server.listen(8080);
/**
 让聊天不再匿名
 1. 客户端第一次连接服务器的时候，服务会提示请输入用户名
 2. 客户端收到提示，然后输入用户名
 3. 把此用户名和此socket关联起来，把此用户名存放在函数内的私有作用域
 4. 以后此socket再发言，就表示此用户名发言了。
 5. 以后前后端发数据的时候应该发对象了{username:'张三',content:'内容',createAt:2016}
 **/