var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
/**
 * 1. 引入静态文件中间件
 * 2. 配置模板 模板引擎+模板的存放目录+html后缀渲染方式
 * 3. 引入bodyParser中间件 req.body属性
 */
app.use(express.static(path.resolve('public')));
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
// name=zfpx&age=9 => {name:'zfpx',age:9} querystring req.body
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
  res.render('index',{title:'首页'});
});
app.get('/book/add',function(req,res){
  res.render('add',{title:'增加书籍'});
});
app.post('/book/add',function(req,res){
  res.render('add',{title:'增加书籍'});
});
app.get('/book/list',function(req,res){
  res.render('list',{title:'书籍列表'});
});
app.get('/book/detail/:id',function(req,res){
  res.render('detail',{title:'书籍详情'});
});
app.get('/book/delete/:id',function(req,res){
  res.render('list',{title:'书籍列表'});
});
//........
app.listen(8080);