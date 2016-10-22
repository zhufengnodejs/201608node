/**
 * 需要在后台向客户端输出一些动态网页
 *
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//设置模板引擎为EJS，模板要按EJS规定的格式来写，渲染的时候也要按照ejs来进行渲染
app.set('view engine','html');// 把engine改成html
//设置模板的存放目录的绝对路径
// __dirname = E:\201608node\3.express\views
app.set('views',path.join(__dirname,'views'));
//设置针对html后缀的模板，使用ejs引擎来进行渲染
app.engine('html',require('ejs').__express);
app.get('/public/bootstrap.min.css',function(req,res){
    //直接把一个文件发送给客户端 参数是一个文件的绝对路径
    res.sendFile(path.join(__dirname,'public','bootstrap.min.css'));
});

/**
 * 当客户端通过GET请求访问服务器/users路径的时候
 * 1. 读取users.json文件，得到一个JSON数组
 * 2. 使用res.render渲染模板，并提供数据对象，需要二个属性，一个是title
 * 另外一个是users的JSON数组
 * 3. 在页面中读取此users的JSON数组并进行循环，生成跟数组元素个数相同的li标签
 */

app.get('/users',function(req,res){
    //读取user.json文件内容，得到一个JSON字符串
    fs.readFile('users.json','utf8',function(err,data){
        //把此字符串转成JSOn对象数组
        var users  = JSON.parse(data);
        //渲染模板 users.ejs是模板的相对路径
        res.render('users',{title:'用户列表',users:users});
    })
});
// /public/bootstrap.min.css
app.listen(8080);