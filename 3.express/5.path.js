var express = require('express');
var app = express();
//在此中间件中判断用户是否登录
// 如果请求的URL路径以/back开头的话，则执行此中间件，否则跳过不执行
app.use('/front',function(req,res,next){
    //如果此用户已经登录
    if(true){
        console.log('此用户已经登录');
    }
    next();
});
//查看商品列表
app.get('/front/goods',function(req,res){
    res.end('商品列表');
});
//用户管理后台
app.get('/back/users',function(req,res){
    res.end('用户管理');
});

app.listen(8080);