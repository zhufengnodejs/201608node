var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
/**
 * 1. 引入静态文件中间件
 * 2. 配置模板 模板引擎+模板的存放目录+html后缀渲染方式
 * 3. 引入bodyParser中间件 req.body属性
 */
app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');
app.set('views', path.resolve('views'));
app.engine('.html', require('ejs').__express);
// name=zfpx&age=9 => {name:'zfpx',age:9} querystring req.body
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.render('index', {title: '首页'});
});
app.get('/book/add', function (req, res) {
    res.render('add', {title: '增加书籍'});
});
//提交增加书籍的表单
/**
 * 1.得到请求体对象
 * 2.读取users.json文件，并把对应的字符串转成json数组
 * 3.向此数组中增加新的书籍对象,增加后把新的数组保存到文件系统中。
 * 4.重定向到书籍列表页
 */
//获取书籍列表的json数组
function getBooks(callback) {
    fs.readFile('./users.json', 'utf8', function (err, data) {
        var books = [];
        if (err ) {
            callback(books);
        } else {
            if(data.startsWith('[')){
                try {
                    books = JSON.parse(data);
                } catch (e) {
                    books = [];
                }
            }
            callback(books);
        }
    })
}
function setBooks(books, callback) {
    fs.writeFile('./users.json', JSON.stringify(books), 'utf8', function (err) {
        callback(err);
    })
}

// send是对end的封装或加强，以支持更多的参数
app.post('/book/add', function (req, res) {
    var book = req.body;//得到请求体 body-parser
    getBooks(function (books) {//读取数据库文件
        book.id = books.length == 0 ? 1 : books[books.length - 1].id + 1;// 给新的书籍赋ID属性，就是最大的ID+1
        books.push(book);//追加到原数组中
        //把新数组保存到文件中去
        setBooks(books, function () {
            res.redirect('/book/list');//重定向到书籍列表
        });
    });
});
/**
 * 1. 文件有可能不存在
 * 2. 文件存在但格式不是合法的json格式
 * 3. 读取文件的代码散落在路由的各个角落
 */

/**
 * 1. 读取books.json文件，得到书籍json数组
 * 2. 渲染list模板
 */
app.get('/book/list', function (req, res) {
    getBooks(function(books){
        res.render('list', {title: '书籍列表',books});
    })
});
/**
 * 点击封面图进入详情页
 * 1. 给封面图增加A链接 /book/detail/1
 * 2. 编写路由，在路由里先得到客户端传过来id 1,然后找到对应的书籍详情 find
 * 3. 使用找到的对应的书籍对象渲染详情页
 */
app.get('/book/detail/:id', function (req, res) {
    var id = req.params.id;
    getBooks(function(books){
        var book = books.find(function(item){
            return item.id == id
        });
        res.render('detail', {title: '书籍详情',book});
    })

});
app.get('/book/delete/:id', function (req, res) {
    var id = req.params.id;
    getBooks(function(books){
        books = books.filter(function(item){
             return item.id != id;
        });
        setBooks(books,function(err){
            res.redirect('/book/list');
        })
    })
});
//........
app.listen(8080);