/**
 * 1.先引入express 得到app
 * 2.引入ejs模板引擎
 * 3.编写路由
 * 4.编写中间件
 **/
var express = require('express');
var path = require('path');
var app = express();
var cookieParser=require('cookie-parser');
var bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
//设置模板引擎
app.set('view engine','html');
//指定模板存放目录，当res.render的第一个参数写的是此路径下面的子路径
app.set('views',path.resolve('views'));
//用EJS的语法渲染html的模板文件
app.engine('.html',require('ejs').__express);
//引入模板
//实现权限控制中间件，判断cookie中有没有用户名，如果有，则跳到用户主页，如果没有则跳到登录页
//定义中间件函数
//如果重定向了，那么客户端会重新发请求，走到中间件里
/*function checkLogin(req,res,next){
    if(req.path == '/login'){//如果请求的是登录页
        next();///直接继续
    }else{
        //如果cookie对象存在，并且已经登录过了
        if(req.cookies && req.cookies.username){
            if(req.path== '/user'){//如果访问的是就是/user直接next
                next();
            }else{//如果访问的不是/user 直接重定向/user
                res.redirect('/user')
            }
        }else{//如果没有登录，则重定向到登录页面
            res.redirect('/login');
        }
    }
}
app.use(checkLogin);*/
//判断是否登录，如果登录过了，则继续 ，如果没登录，则跳转登录页登录
function checkLogin(req,res,next){
    if(req.cookies&& req.cookies.username){
        next();
    }else{
        res.redirect('/login');
    }
}

//登录页
app.get('/login',function(req,res){
   res.render('login')
});
app.post('/login',function(req,res){
    var user = req.body;//得到请求体
    if(user.username == user.password){//如果在表单中输入的用户名和密码相同，则登录成功
        //把用户名写入cookie
      res.cookie('username',user.username);
        res.cookie('username',user.username);
        //重定向到user页面
      res.redirect('/user');
    }else{
        res.redirect('back');
    }
});
//用户主页
app.get('/user',checkLogin,function(req,res){
   res.render('user',{username:req.cookies.username})
});


app.listen(8080);
