var express = require('express');
var app = express();
app.use(function(req,res,next){

});
/**
 * 如何获取 请求参数
 * 1.请求的主机名和路径
 */
app.get('*',function(req,res){
    console.log(req.hostname);
    console.log(req.url);//请求的url
    console.log(req.path);//请求的路径
    console.log(req.query);//查询字符串转成的对象
    res.end('over');
});

app.listen(8080);