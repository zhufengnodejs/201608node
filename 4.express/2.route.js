var express = require('express');
var app = express();
var user = require('./routes/user');
var goods = require('./routes/goods');
//用户相关的路由放在user路由文件里配置
app.use('/user',user);
//商品相关的路由放在goods路由文件里配置
app.use('/goods',goods);
app.listen(8080);