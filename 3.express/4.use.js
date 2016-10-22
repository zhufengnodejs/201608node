var express = require('express');
var app = express();
//中央一级
app.use(function(req,res,next){
    req.money = 1000;
    next();
});
//省里
app.use(function(req,res,next){
    req.money = req.money-200;
    next();
});
//市里
app.use(function(req,res,next){
    req.money = req.money-400;
    next();
});
// 村里
app.use(function(req,res,next){
    req.money = req.money-300;
    //console.log(req.money);
    next();
    //res.end();
});
app.get('/',function(req,res){
    res.end('你收到了'+req.money+'钱');
});
app.listen(8080);