//files是一个数组，filename是文件名，content是此文件名对应的文件内容，现在需要保存这三个文件，文件内容分别是对应的content
var files = [
    {filename: '1.txt', content: '我是1'},
    {filename: '2.txt', content: '我是2'},
    {filename: '3.txt', content: '我是3'}
];
var fs = require('fs');
/*var async = require('async');
async.forEach(files, function (item, cb) {
    fs.writeFile(item.filename,item.content,'utf8',function(err){
        cb(err);
    });
}, function (err) {
    console.log('全部任务执行完毕');
});*/

/*new Promise(function(resolve,reject){
   //resolve
   //reject
});*/

var promises = files.map(function(file){
    return new Promise(function(resolve,reject){
        fs.writeFile(file.filename,file.content,'utf8',function(err){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    });
});
//当数组中所有的promise都成功之后才会调成功的回调
Promise.all(promises).then(function(){
    console.log('全部写入完毕');
});