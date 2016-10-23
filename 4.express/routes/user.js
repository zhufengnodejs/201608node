/**
 如何创建路由容器中间件
 **/
var express = require('express');
//这是一个工厂方法，用于生成一个路由容器中间件实例
var routers = express.Router();
//routers也是一个容器，存放着各种各样路由配置
//  /user/add
routers.get('/add', function (req, res) {
    res.send('增加用户');
});
routers.get('/delete', function (req, res) {
    res.send('删除用户');
});
module.exports = routers;

