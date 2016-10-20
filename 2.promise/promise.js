/**
 * 1. 此模块要导出一个类或构造函数
 * 2. 构造函数需要一个函数参数，此函数会立刻执行
 * 3. 此函数需要二个参数 resolve reject
 * 4. 如果调用 resolve调用成功回调
 * 5. 如果调用reject调用失败的回调
 */
function Promise(fn){
   //1.声明一个resolve
   var resolve = data =>  this.onSuccess(data);
   //2. 声明一个reject
   var reject = error => this.onFail(error);
   fn(resolve,reject);
}
Promise.prototype.then = function(onSuccess,onFail){
    this.onSuccess = onSuccess;
    this.onFail= onFail;
}

module.exports = Promise;