var express = require('express');
var app = express();
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    next();
});
app.use(function (req, res, next) {
    //判断param的类型
    // 1.如果是字符串，直接end
    // 2.如果是对象转成字符串再end.
    // 3.如果是数字则设置响应的状态码并且把此状态的描述短语设置为响应体
   /* res.send = function (param) {
        if (typeof param === 'string' || Buffer.isBuffer(param)) {
            res.end(param);
        } else if (Object.prototype.toString.call(param) === '[object Object]') {
            param = JSON.stringify(param);
            res.end(param);
        } else if (Object.prototype.toString.call(param) === '[object Array]') {
            param = JSON.stringify(param);
            res.end(param);
        }else if(typeof  param == 'number'){
            switch (param) {
                case 200:
                    res.statusCode = 200;
                    res.end('ok');
                    break;
                case 404:
                    res.statusCode = 404;
                    res.end('file is not found!');
                    break;
            }
        }
    }*/
    next();
});
app.get('/', function (req, res) {
    res.send('首页');
});
app.get('/user', function (req, res) {
    res.send({name: 'zfpx', age: 8});
});
app.get('/users', function (req, res) {
    res.send([{name: 'zfpx', age: 8},{name: 'zfpx', age: 8}]);
});
app.get('/status', function (req, res) {
    res.send(404);
    //res.sendStatus(200);
});
app.listen(8080);