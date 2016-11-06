/**
 * 1. 导入mongoose
 * 2. 连接数据库
 * 3. 定义schema
 * 4. 定义model
 * 5. 导出model
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crawl');
//定义电影分类的schema id是自定义字段并非此集合的主键 ，集合主键 叫 _id
var CategorySchema = new mongoose.Schema({
    id:Number,//是百度分类ID
    name:String,//分类的名称
    url:String// 读取分类下面电影列表的URL
},{collection:'category'})
//定义电影分类的MODEL
exports.Category = mongoose.model('Category',CategorySchema);

var MovieSchema = new mongoose.Schema({
    cid:Number,//分类的ID
    name:String,//电影的名称
    url:String//此电影对应的百度搜索地址
},{collection:'movie'});

exports.Movie = mongoose.model('Movie',MovieSchema);


