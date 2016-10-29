var path = require('path');
var fs = require('fs');
/**
 * 静态文件中间件
 * 判断请求的路径文件在静态目录下是否存在，如果存在，则返回，不存在则next
 * @param req
 * @param res
 * @param next
 * /js/index.js
 */
module.exports = function(parent){
    return function(req,res,next){
        var filename = path.join(parent,req.path);
        fs.exists(filename,function(exists){
            if(exists){
                /**
                 * 1. readFile
                 * 2. fs.createReadStream(filename).pipe(res);
                 * 3. sendFile
                 */
                res.sendFile(filename);
            }else{
                next();
            }
        })
    }
}