/**
 * 当用户访问 / 的时候返回一个注册用户的表单
 * 用户填写用户名和密码，然后点击提交按钮以post的方式提交到服务器端
 * 服务器接收客户端post请求，得到请求体对象并输出回客端
 **/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// key=value&key=value
//此中间件用来将urlencoded格式 的请求体转成JSON对象并放在req.body上
// name=zfpx&age=6 url {name:'zfpx',age:6}
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    // 路径必须是一个绝对路径或者指定一个相对位置
  res.sendFile('reg.html',{root:__dirname});
});

app.post('/',function(req,res){
   res.send(req.body);
});

app.listen(9090);