/**
 * 1.读取分类列表
 * 2.根据分类读取分类下面的电影列表
 * 3.保存分类数组
 * 4.保存电影数组
 **/
var async = require('async');
var read = require('./read');
var write = require('./write');
var categoryUrl = 'http://top.baidu.com/category?c=1&fr=topindex';
var categories = [];//所有的分类
var movies = [];// 所有的电影
async.series([
  function(cb){ //1.读取分类列表
    read.category(categoryUrl,function(err,items){
        categories = items;
        console.log('1.读取分类列表完毕');
        cb();
    })
  },
  function(cb){  //2.根据分类读取分类下面的电影列表
      async.forEach(categories,function(item,callback){
           //读取每个分类下面的电影列表，并且全部添加到 movies
          read.movie(item.url,item.id,function(err,items){
              movies = movies.concat(items);
              callback();
          })
      },function(){
          console.log('2.读取电影列表完毕');
          cb();
      });
  },
  function(cb){
      async.parallel([
          function(cbb){// 3.保存分类数组
              write.category(categories,cbb);
          },
          function(cbb){ //4.保存电影数组
              write.movie(movies,cbb)
          }
      ],function(){
          console.log('3.保存分类和电影列表完毕');
          cb();
      })
  }
],function(err,result){
     console.log('全部写入完毕');
})
