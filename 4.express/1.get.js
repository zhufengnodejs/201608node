var express = require('express');
var fs = require('fs');
var app = express();
/*function request(req,res){
    var method = req.method;
    var path = require('url').parse(req.url).pathname;
    if(method == 'GET' && path =='/'){
        res.end('首页');
    }else if(method == 'GET' && path =='/user'){
        res.end('用户');
    }
}*/
app.use('/user',function(req,res,next){
    console.log(req.path);
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    fs.readFile('1.txt','utf8',function(err,data){
        req.msg = data;
        next();
    });
    //next();
});

app.get('/',function(req,res){
    console.log('req.msg=',req.msg);
    res.end('首页');
});

app.get('/user/add',function(req,res){
    res.end('用户');
});

app.listen(8080);
//require('http').createServer(app);