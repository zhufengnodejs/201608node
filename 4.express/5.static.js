var express = require('express');
var app = express();
var path = require('path');
// path.resolve('public') 得到public 目录的绝对目录
// /css/index.css
// /index.js
app.use(express.static('public'));
app.use(express.static('app'));
app.get('/',function(req,res){
    res.send('home');
});
app.listen(9090);