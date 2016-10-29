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
app.use(cookieParser());
//设置模板引擎
app.set('view engine','html');
//指定模板存放目录，当res.render的第一个参数写的是此路径下面的子路径
app.set('views',path.resolve('views'));
//用EJS的语法渲染html的模板文件
app.engine('.html',require('ejs').__express);
//引入模板
//实现权限控制中间件，判断cookie中有没有用户名，如果有，则跳到用户主页，如果没有则跳到登录页
//定义中间件函数
function checkLogin(req,res,next){
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
//登录页
app.get('/login',function(){
   res.render('index')
});
//用户主页
app.get('/user',function(){
   res.render('user')
});


app.listen(8080);
