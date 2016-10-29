var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//app 是一个监听函数
var app = express();
//使用此中间件后会在req.cookies=cookieObj
app.use(cookieParser());
//如何写cookie  res.cookie(name,value); res.cookie('count',1);
// res.setHeader('Set-Cookie','count=1');
/**
 * 1. 获取请求对象中的cookie  req.cookies
 * 2. 如何向客户端写入cookie res.cookie()
 */
app.get('/visit',function(req,res){
    //得到cookie对象
   var cookie = req.cookies;
    //判断此对象如果存在并且count有值的话
    if(cookie && cookie.count){
        cookie.count++;
        res.cookie('count',cookie.count,{});
        res.send('欢迎你老顾客的第'+cookie.count+'次光临')
    }else {
        res.cookie('count',1);
        res.send('欢迎你新顾客的第1次光临')
    }
});


app.listen(8080);