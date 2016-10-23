var express = require('express');
var routes = express.Router();
routes.get('/add',function(req,res){
    res.send('增加商品');
});
routes.get('/delete',function(req,res){
    res.send('删除商品');
});
module.exports = routes;