var User = {
    data: [{age: 1}, {age: 2}, {age: 3}, {age: 4}, {age: 5}, {age: 6}, {age: 7}, {age: 8}, {age: 9}, {age: 10}],
    skip(num){

    },
    limit(num){

    },
    sort(sortObj){

    },
    exec(callback){

    }
}
var pageNum = 2;
var pageSize = 3;
User.skip(pageSize * (pageNum - 1)).limit(pageSize).sort({age: 1}).exec(function (docs) {
    console.log(docs);// 4 5 6
});