// http://top.baidu.com/category?c=1&fr=topindex
//一个http请求工具，用来向HTTP服务器发起请求
var request = require('request');
//用于把gbk的 buffer转成字符串
var iconv = require('iconv-lite');
/**
 * 1.告诉 request不要帮我们把buffer转字符串 ，我们要自己转
 * 2.gbk的 buffer转成字符串
 */
request({url:'http://top.baidu.com/category?c=1&fr=topindex',encoding:null},function(err,response,body){
    if(!err && response.statusCode == 200){
        //console.log(response.headers);
        //1参数是要转字符串的buffer,第二个参数是此buffer的编写
        // utf8
        body = iconv.decode(body,'gbk');
        console.log(body);
    }
});