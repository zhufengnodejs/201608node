var express = require('express');
// session中间件
var session = require('express-session');
var app = express();
/**
 * 使用session中间件
 * 当使用此中间件之后会在req.session=就等于此客户端在服务器端对应的session数据对象
 */
app.use(session({
    resave:true,//每次客户端请求的时候重新保存session
    saveUninitialized:true,//保存未初始化的session
    secret:'zfpx',//加密cookie
    //cookie:{maxAge:10*1000}
}));
app.get('/set',function(req,res){
    //给session赋值
    req.session.username = req.query.username;
    res.send('set ok');
});
app.get('/get',function(req,res){
    res.send(req.session);
});
app.listen(9090);