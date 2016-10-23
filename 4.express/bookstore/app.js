var express = require('express');
var path = require('path');
var fs = require('fs');
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
//提交增加书籍的表单
/**
 * 1.得到请求体对象
 * 2.读取users.json文件，并把对应的字符串转成json数组
 * 3.向此数组中增加新的书籍对象,增加后把新的数组保存到文件系统中。
 * 4.重定向到书籍列表页
 */
app.post('/book/add',function(req,res){
  var book = req.body;//得到请求体 body-parser
  fs.readFile('./users.json','utf8',function(err,data){//读取数据库文件
    var books = JSON.parse(data);//转成json数组
    book.id =  books[books.length-1].id+1;// 给新的书籍赋ID属性，就是最大的ID+1
    books.push(book);//追加到原数组中
    //把新数组保存到文件中去
    fs.writeFile('./users.json',JSON.stringify(books),'utf8',function(err){
      res.redirect('/book/list');//重定向到书籍列表
    })
  })
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