/**
 * 通过cookie统计客户端访问的次数
 */
var http = require('http');
var querystring = require('querystring');
http.createServer(function(req,res){
    //当浏览器访问一台服务器的时候，会自动发送 /favicon.ico的请求
    console.log(req.url);
    if(req.url == '/visit'){
        //获取请求头中的cookie字符串
        var cookie = req.headers.cookie;
        //把此cookie字符串转成对象
        var cookieObj = querystring.parse(cookie,'; ');
        //req.cookies = cookieObj;
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        if(cookie && cookieObj && cookieObj.count){
            var count = cookieObj.count;// 取得原来的count值
            count++;//加1
            console.log(count);
            //重新把最新的count值写回到客户端,请客户端重新保存
            res.setHeader('Set-Cookie',['name=zfpx1','count='+count]);
            res.end('欢迎你老顾客的第'+count+'次光临');
        }else{
            //1. 第一次访问服务器的时候
            var count = 1;
            //设置响应头
            res.setHeader('Set-Cookie',['name=zfpx1','count='+count]);
            res.end('欢迎你新顾客的第'+count+'次光临');
        }
    }else{
        res.end('404');
    }


}).listen(8080);
