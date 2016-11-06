var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
//传一个分类列表的URL，得到分类对象数组
/**
 * 1.向url发起http请求得到响应体
 * 2.分析响应体页面，得到对象数组
 */
exports.category = function(url,callback){
    request({url,encoding:null},function(err,response,body){
      if(!err && response.statusCode == 200){
          body = iconv.decode(body,'gbk');
          var $ = cheerio.load(body);
          var items = [];
          $('.hd .title a').each(function(){
              //<a href="http://top.baidu.com/buzz?b=339&amp;c=1&amp;fr=topcategory_c1">惊悚电影</a>
              var $this = $(this);
              var href = $this.attr('href');
              var result = href.match(/buzz\?b=(\d+)/);
              var item = {
                  id:parseInt(result[1]),
                  name:$this.text(),
                  url:href
              }
              items.push(item);
          });
          callback(null,items);
      }else{
          callback(err);
      }
    })
}

//传入一个分类下的电影列表，得到电影对象数组
exports.movie = function(url,callback){

}

exports.category('http://top.baidu.com/category?c=1&fr=topindex',function(err,items){
        console.log(items);
});