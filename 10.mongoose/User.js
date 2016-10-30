var User = {
    data: [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}, {age: 7}, {age: 8}, {age: 9}, {age: 10}],
    skip(num){
       this._skip = num;//缓存跳过的条数
       return this;
    },
    limit(num){
        this._limit = num;//缓存返回的条数
        return this;
    },
    sort(sortObj){
        var attr = Object.keys(sortObj)[0];//得到排序的字段 attr = age
        this._sort = function(a,b){
            return (a[attr]-b[attr])*sortObj[attr];
        };
        return this;
    },
    exec(callback){
       //setImmediate();
       process.nextTick(()=>{
           // 3 3    3-<6  3 4 5
           var result = this.data.sort(this._sort).slice(this._skip,this._skip+this._limit);
           callback(result);
       });
        return this;
    }
}
var pageNum = 2;
var pageSize = 3;
User.exec(function (docs) {
    console.log(docs);// 4 5 6
}).skip(pageSize * (pageNum - 1)).limit(pageSize).sort({age: 1})