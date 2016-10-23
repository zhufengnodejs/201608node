/**
 * 如何获取请求的参数
 * 1. 请求行 方法名 和 路径 -》路径参数
 * 2. 请求头
 * 3. 请求体
 */
var app = require('express')();
//       /user/1/zfpx?name=zfpx&age=1
app.get('/user/:id/:name',function(req,res){
    console.log(req.method);//GET
    console.log(req.path);///user/1/zfpx
    console.log(req.query);// name=zfpx&age=1-> { name: 'zfpx', age: '1' }
    console.log(req.params);// { id: '1', name: 'zfpx' }
    console.log(req.headers);
    res.send('ok');

});


app.listen(8080);
