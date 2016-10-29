var express = require('express');
var path = require('path');
var app =express();
//1 引入模板引擎
app.set('view engine','html');
//2.设置模板存放目录
app.set('views',path.resolve('views'));
//3 设置渲染的方法
app.engine('.html',require('ejs').__express);
var bodyParser = require('body-parser');
var session = require('express-session');
//请求体处理中间件，把请求体转成对象放在req.body上
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));
function checkLogin(req,res,next){
    if(req.session.username){
        next();
    }else{
        res.redirect('/login');
    }
}
app.get('/login',function(req,res){
    res.render('login');
});
app.post('/login',function(req,res){
    var user = req.body;//得到bodyParser传递给我们的请求体
    if(user.username == user.password){
        req.session.username = user.username;//把用户名写入session
        res.redirect('/user');//请客户端向新的路径发起请求
    }
});

app.get('/user',checkLogin,function(req,res){
    res.render('user',{username:req.session.username});
});



app.listen(9090);