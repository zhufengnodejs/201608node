/**
 * 把分类的数组和电影列表数组保存到数据库中
 */
var Category = require('./db').Category;
var Movie = require('./db').Movie;
exports.category = function(items,callback){
    Category.create(items,callback);
}

exports.movie = function(items,callback){
    Movie.create(items,callback);
}