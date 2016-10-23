var express = require('express');
var app = express();
/**
 * 1. 引入静态文件中间件
 * 2. 配置模板 模板引擎+模板的存放目录+html后缀渲染方式
 * 3. 引入bodyParser中间件 req.body属性
 */

app.get('/',function(req,res){
  res.render('index',{title:'首页'});
});
//........
app.listen(8080);