var express = require('express');
var app = express();



app.get('/front',function(req,res){
        res.send('前台页面');
});
app.get('/back',function(req,res){
    res.send('后台页面');
});
/**
 * 1. 编写一个中间件，判断查询字符串对象的参数 是否有一个name=admin的kv值。
 * 如果有重定向到/back跳由里，如果没有则重定向到front路由里
 * res.redirect('/back'); 表示让客户端重新向/back路径发起请求
 * http://localhost:9090/hello?name=admin&age=8
 */
app.use(function(req,res,next){
    /**
     * 1. 发送的响应状态码是302
     * 2. 发送一个Location=新地址的响应头到客户端
     */
    res.redirect = function(url){
        res.statusCode = 302;
        res.setHeader('Location',url);
        res.end();
    };
    next();
});
app.use(function(req,res,next){
    console.log('中间件 ');
    var name = req.query.name;
    if(name == 'admin'){
        res.redirect('/back');
    }else{
        res.redirect('/front');
    }
});

app.listen(9090);