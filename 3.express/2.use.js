var express = require('express');
var app = express();
//可以把路由中的公用代码提取出来放在中间件里执行
//不管有任何请求过来都要先执行中间件，再匹配执行路由
app.use(function(req,res,next){
    res.setHeader('content-type','text/plain;charset=utf8');
    next();
});
app.get('/',function(req,res){
    res.end('首页')
});
app.get('/user',function(req,res){
    res.end('用户管理')
});
app.get('/profile',function(req,res){
    res.end('个人设置')
});
app.listen(8080);
