var express = require('express');
var path = require('path');
var app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
var Category = require('./tasks/db').Category;
var Movie = require('./tasks/db').Movie;
var async = require('async');
app.get('/',function(req,res){
   var cid = req.query.cid;
   var query = {};
   if(cid)
       query.cid = cid;
    else
       query.cid = 26;
   async.parallel([
       function(cb){
           Category.find({},cb);//把分类的数组传给callback
       },function(cb){
           Movie.find(query,cb);//把电影的数组传给callback
       }
   ],function(err,result){
        res.render('index',{categories:result[0],movies:result[1]});
   })
});
app.listen(8080);