var express = require('express');
var fs = require('fs');
var app = express();
/**
 * 使用一个中间件函数
 * next是一个方法，调用则意味着本中间件已经执行完毕，可以继续向下执行了
 */
app.use(function (req, res, next) {
    res.setHeader('Content-Type', "text/plain;charset=utf-8");
   /* fs.readFile('1.txt', 'utf8', function (err, data) {
        req.hello = data;
        next();
    });*/
    //next();
    res.end('不让你继续访问了');
});

app.get('/', function (req, res) {
    console.log(req.hello);
    res.end('根目录');
});
app.listen(8080);