var arr = [1,2,3];
/**
 * map里创建一个与原来数组长度一样的新的空数组
 * map sort filter reduce reduceRight ....
 */
Array.prototype.map = function(callback){
   var newArr = [];
   for(var i=0;i<this.length;i++){
       newArr.push(callback(this[i],i,this));
   }
    return newArr;
}
var newArr = arr.map(function(item){
    return item*2;
});

console.log(newArr)