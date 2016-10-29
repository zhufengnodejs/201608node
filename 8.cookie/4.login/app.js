/**
 * 1.先引入express 得到app
 * 2.引入ejs模板引擎
 * 3.编写路由
 * 4.编写中间件
 **/
var express = require('express');
var app = express();
//引入模板
//实现权限控制中间件，判断cookie中有没有用户名，如果有，则跳到用户主页，如果没有则跳到登录页
app.use(function(req,res,next){
   //如果访问的是登录页的话直接 next

});
//登录页
app.get('/login',function(){

});
//用户主页
app.get('/user',function(){

});


app.listen(8080);
