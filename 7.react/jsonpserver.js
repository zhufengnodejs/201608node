var express = require('express');
var app = express();
//https://localhost:9090/su?cb=jQuery_1478056916822&wd=b&_=1478056916824
app.get('/su',function(req,res){
 var cb =  req.query.cb;//回调函数的方法名
 var wd  = req.query.wd;//查询参数
 var words = [];
 for(var i=1;i<=5;i++){
     words.push(wd+i);
 }
 var result = {q:wd,p:false,s:words};
 //jQuery111109257844484509952_1478056916822()
 res.send(`${cb}(${JSON.stringify(result)})`);
});
app.listen(9090);