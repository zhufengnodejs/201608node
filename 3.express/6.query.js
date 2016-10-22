var express = require('express');
var url = require('url');
var app = express();
app.use(function (req, res, next) {
    //在此为req的hostname path query赋值.然后在下面的路径中都可以使用了
    //把请求的url转成对象
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,//取得路径名赋给req.path
        query = urlObj.query;// 取得查询字符串对象赋给query
    //把请求头中的host取出来，按：分隔，得到第1个元素就是主机名
    req.hostname = req.headers.host.split(':')[0];
    req.path = pathname;
    req.query = query;
    next();
});
// /users/1
/*app.get(/users\/(\d+)/,function(req,res){
    var id = req.url.match(/users\/(\d+)/)[1];
    res.end(req.url);
    console.log('ID='+id);
});*/
// /users/1/zfpx
app.get("/users/:id/:name",function(req,res){
    console.log(req.params);
    res.end(JSON.stringify(req.params));
});
/**
 * 1. 路径参数 req.params req.path
 * 2. 查询字符串 req.query
 * 3. 请求头 req.headers
 * 4. 请求体
 */
/**
 * 如何获取 请求参数
 * 1.请求的主机名和路径
 */
app.get('*', function (req, res) {
    console.log(req.hostname);
    //console.log(req.url);//请求的url
    console.log(req.path);//请求的路径
    console.log(req.query);//查询字符串转成的对象
    res.end('over');
});


app.listen(8080);