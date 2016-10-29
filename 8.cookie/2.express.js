var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//app 是一个监听函数
var app = express();
//使用此中间件后会在req.cookies=cookieObj
app.use(cookieParser());
//如何写cookie  res.cookie(name,value); res.cookie('count',1);
app.get('/visit',function(req,res){

});


app.listen(8080);