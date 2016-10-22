/**
 * 需要在后台向客户端输出一些动态网页
 *
 */
var express = require('express');
var path = require('path');
var app = express();
//设置模板引擎为EJS，模板要按EJS规定的格式来写，渲染的时候也要按照ejs来进行渲染
app.set('view engine','ejs');
//设置模板的存放目录的绝对路径
// __dirname = E:\201608node\3.express\views
app.set('views',path.join(__dirname,'views'));
/**
 * 当客户端通过GET请求访问服务器/users路径的时候
 * 1. 读取users.json文件，得到一个JSON数组
 * 2.
 */
app.get('/users',function(req,res){
    //模板是一个相对路径，
   res.render('users.ejs',{title:'用户列表'});
});
app.listen(8080);