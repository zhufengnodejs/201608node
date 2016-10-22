var fs = require('fs');
function readFile(filename) {
    /**
     * 创建promise实例之后就相当于开启了一个任务
     */
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFile('1.txt')
.then(function(data){
    //console.log(data);// 2.txt
    //在成功的回调里可以返回一个新的promise从而实现链式调用
    return readFile(data);
})
.then(function(data){
    //console.log(data);// 3.txt
    return readFile(data);
})
.then(function(data){
    console.log(data);
});