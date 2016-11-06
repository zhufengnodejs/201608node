var async = require('async');
var fs = require('fs');
async.waterfall([
    function (cb) {
        fs.readFile("1.txt",'utf8',function (err, data) {
            cb(err,data);
        })
    },
    function (data,cb) {// 2.txt
        fs.readFile(data,'utf8',function (err, data) {
            cb(err,data);
        })
    },
    function (data,cb) {//3.txt
        fs.readFile(data,'utf8',function (err, data) {
            cb(err,data);//data=> result
        })
    }
],function (err, result) {
    console.log(result.toString());
});
