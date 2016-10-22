/**
 * 需要在后台向客户端输出一些动态网页
 *
 */
var express = require('express');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var app = express();
//设置模板引擎为EJS，模板要按EJS规定的格式来写，渲染的时候也要按照ejs来进行渲染
app.set('view engine','html');// 把engine改成html
//设置模板的存放目录的绝对路径
// __dirname = E:\201608node\3.express\views
app.set('views',path.join(__dirname,'views'));
//设置针对html后缀的模板，使用ejs引擎来进行渲染
app.engine('html',require('ejs').__express);
app.use(function(req,res,next){
    /**
     * 1.读取文件内容
     * 2. 把读到的文件内容发送给客户端并结束响应
     */
    res.sendFile = function(filepath){
        fs.readFile(filepath,'utf8',function(err,data){
            res.setHeader('Content-Type',mime.lookup(filepath));
            res.write(data);
            res.end();
        })
    }
    next();
});
//写一个静态文件中间件，可以拦截所有的静态文件请求，当有静态文件请求的时候会把静态文件目录下面找到对应的文件，如果找到了，则读出来返回给客户端，如果没找到，继续 向下寻找合适的路由来进行处理
app.use(function(req,res,next){
    var filepath = req.path; //    /css/bootstrap.min.css
    filepath = path.join(__dirname,'public',filepath);
    fs.exists(filepath,function(exists){
        if(exists){
            fs.createReadStream(filepath).pipe(res);
        }else{
            next();
        }
    })
});
//静态文件中间件是express唯一的官方认证的 自带的中间件
app.use(express.static(path.join(__dirname,'public')));
/*app.get('/public/bootstrap.min.css',function(req,res){
    //直接把一个文件发送给客户端 参数是一个文件的绝对路径
    res.sendFile(path.join(__dirname,'public','bootstrap.min.css'));
});*/

/**
 * 当客户端通过GET请求访问服务器/users路径的时候
 * 1. 读取users.json文件，得到一个JSON数组
 * 2. 使用res.render渲染模板，并提供数据对象，需要二个属性，一个是title
 * 另外一个是users的JSON数组
 * 3. 在页面中读取此users的JSON数组并进行循环，生成跟数组元素个数相同的li标签
 */
app.use(function(req,res,next){
    /**
     * 1. 从硬盘里读出模板的内容
     * 2. 把模板字符串里的占位符或者说变量使用数据对象的同名属性替换掉
     * 3. 把替换后的结果发送给客户端
     */
   res.render = function(tmplName,data){
       //得到模板文件的绝对路径，并且读取模板的文件内容
      fs.readFile(path.join(app.get('views'),tmplName),'utf8',function(err,result){
          result = result.replace(/<%=(\w+)%>/g,function(input,group1){
                // data={title:'用户列表'}
                return data[group1];
          });
          res.send(result);
      })
   }
    next();
});
app.get('/users',function(req,res){
    //读取user.json文件内容，得到一个JSON字符串
    fs.readFile('users.json','utf8',function(err,data){
        //把此字符串转成JSON对象数组
        var users  = JSON.parse(data);
        //渲染模板 users.ejs是模板的相对路径
        res.render('users.html',{title:'用户列表',users:users});
    })
});
// /public/bootstrap.min.css
app.listen(8080);