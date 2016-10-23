var app = require('express')();
//设置模板引擎
app.set('view engine','html');
var path = require('path');
//设置模板的存放目录
// resolve是从当前路径出发，拼上参数路径，得到最终绝对路径
//console.log(path.resolve('views'));
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
app.get('/',function(req,res){
    //1参数是模板相对于模板存放目录的相对路径
    //2参数是模板渲染时想使用的数据对象
    res.render('index.html',{title:'首页'});
});
app.get('/user',function(req,res){
    //1参数是模板相对于模板存放目录的相对路径
    //2参数是模板渲染时想使用的数据对象
    res.render('user',{title:'用户'});
});
app.listen(8080);