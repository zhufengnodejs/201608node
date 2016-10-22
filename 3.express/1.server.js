var express = require('express');
/**
 * 1.如何通过express启动一个http服务器
 **/
/**
 * 1. express是一个函数，运行它会得到一个新的函数
 * app其实就是一个http服务器的监听函数
  */
var app = express();
//服务器的主要功能是提供服务，根据客户端的请求URL路径不同，返回不同的内容,这就是叫路由
//我们可以通过app配置很多路由规则
app.get('/',function(req,res){
    //通过此响应头描述响应体的内容类型
   res.setHeader('Content-Type','text/plain;charset=utf-8');
   res.end('根目录');
});
//对于一次特定的请求，只有一个路由函数会执行
app.get('/user',function(req,res){
    res.end('获取用户');
});
//get(查询读取) post(增加) delete(删除) put(更新) head(只获取请求头) options(获取服务器支持请求方法)
app.post('/user',function(req,res){
    res.end('增加用户');
});
//不管客户端通过GET请求访问任何路径，此规则都能处理
//all表示匹配所有的方法，不管请求的有一个是什么，不管请求的路径是什么，全都能匹配
app.all('*',function(req,res){
    res.end('get 404');//文件未找到
});

//http.createServer(app).listen(8080);
app.listen(8080);


