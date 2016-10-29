var express = require('express');
var app = express();
app.get('/visit',function(req,res){
    /**
     * 1. 设置域名 写cookie的时候，可以设置客户端向哪些域名发请求的时候会带上此cookie
     * 2. 设置路径
     * 3. 设置过期时间
     */
    //res.cookie('name','kfc',{domain:'kdj.hlg.com'});
    //只有访问/read1路径的时候才会把cookie发给服务器
    //res.cookie('name','kfc',{path:'/read1'});
    //res.cookie('name','kfc',{expires:new Date(Date.now()+10*1000)});
    res.cookie('name','kfc',{maxAge:10*1000});
    res.send('ok');
});
app.get('/read',function(req,res){
    res.send(req.headers.cookie);
});
app.get('/read1',function(req,res){
    res.send(req.headers.cookie);
});
app.listen(8080);
/**
 * kdj.hlg.com 127.0.0.1
 * kdj.hy.com 127.0.0.1
 **/