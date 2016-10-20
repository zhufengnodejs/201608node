var fs = require('fs');
var Promise = require('./promise');
/**
 * Promise
 */
function readFile(filename) {
    /**
     * 基本于Promise类创建一个实例
     * 接收一个函数作为参数,此函数会立刻执行
     * 此函数有两个参数，resolve调用后会把当前状态改为成功态
     * reject调用会把当前状态改为失败态
     */
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err,data) {
            if(err){//如果有错误，调用reject变成失败态，
                reject(err);
            }else{//如果没错误，调用resolve变成成功态
                resolve(data);
            }
        })
    });
}
/**
 * then用来注册成功的失败的回调函数
 */
readFile('1.txt').then(function (data) {
    console.log(data);
}, function (error) {
    console.error(error);
});