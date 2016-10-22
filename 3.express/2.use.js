var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.setHeader('content-type','text/plain;charset=utf8')
    res.end('首页')
});
app.get('/user',function(req,res){
    res.end('用户管理')
});
app.get('/profile',function(req,res){
    res.end('个人设置')
});
app.listen(8080);
