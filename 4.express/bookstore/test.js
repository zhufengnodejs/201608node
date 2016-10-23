var arr = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
var result = arr.find(function(item){
    return item.id == 2;
})
console.log(result);