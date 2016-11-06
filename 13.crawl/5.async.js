var async = require('async');
async.series([
    function (cb) {
       cb(null,'2.txt');
    },
    function (cb,data) {
        cb(null,'3.txt');
    },
    function (cb,data) {
        cb(null,'我是3');
    }
//result是一个数组
], function (err, result) {
   console.log(err);
   console.log(result);
})