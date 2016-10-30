/**
 * zhangrenyang
 */
var express=require('express');
var session=require('express-session');
var ejs=require('ejs');
var bodyParser = require('body-parser');
var path=require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
var app=express();
app.use(session({
    resave:true,//每次客户端请求的时候重新保存session
    saveUninitialized:true
}));
function checkLogin(res,req,next){
    if(req.session.username){
        next();
    }else{
        res.redirect('/login');
    }
}
app.get('/login',function(req,res){
    res.render('login');
});
app.post(function(req,res){
    var user=req.body;
    req.session.username=user.username;
    render('login');

});
app.get('/user',function(req,res){
    res.render('user');
});
app.listen(9999)