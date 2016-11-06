var fs = require('fs');
var async = require('async');
console.time('cost');
async.parallel([
    function(cb){
       /* fs.readFile('1.txt','utf8',function(err,first){//first=1.txt 1
            cb(err,first);
        })*/
        setTimeout(function(){
            cb(null,'1');
        },2000);
    },
    function(cb){
      /*  fs.readFile('2.txt','utf8',function(err,second){//second 2.txt 2
            cb(err,second);
        })*/
        setTimeout(function(){
            cb('wrong','2');
        },1000);
    }
],function(err,result){//当所有的异步任务都执行完毕之后才会调用此回调函数
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})
/*
fs.readFile('1.txt','utf8',function(err,first){//first=1.txt

})

fs.readFile('2.txt','utf8',function(err,second){//second 2.txt

})*/
