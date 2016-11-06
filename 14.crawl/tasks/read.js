
//传一个分类列表的URL，得到分类对象数组
/**
 * 1.向url发起http请求得到响应体
 * 2.分析响应体页面，得到对象数组
 */
exports.category = function(url,callback){
   //
}

//传入一个分类下的电影列表，得到电影对象数组
exports.movie = function(url,callback){

}

exports.category('http://top.baidu.com/category?c=1&fr=topindex',function(err,items){
        console.log(items);
});