var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
//传一个分类列表的URL，得到分类对象数组
/**
 * 1.向url发起http请求得到响应体
 * 2.分析响应体页面，得到对象数组
 */
exports.category = function(url,callback){
    //向服务器发起请求，不指定编码，得到响应的buffer
    request({url,encoding:null},function(err,response,body){
      //如果没有错误，并且响应的状态码是200的话
      if(!err && response.statusCode == 200){
          //把响应的buffer转成字符串
          body = iconv.decode(body,'gbk');
          //把字符串转成$对象
          var $ = cheerio.load(body);
          var items = [];
          //用筛选符把对应的元素提取成一个集合，然后对这个集合进行迭代
          $('.hd .title a').each(function(){
              //<a href="http://top.baidu.com/buzz?b=339&amp;c=1&amp;fr=topcategory_c1">惊悚电影</a>
              var $this = $(this);//把原生的DOM对象转成jquery对象
              var href = $this.attr('href');//取出href属性
              var result = href.match(/buzz\?b=(\d+)/);//匹配正则提取id
              var id = parseInt(result[1]);
              var item = {
                  id:id,//返回值的第二个元素就是第一个分组，也就是想找的ID
                  name:$this.text(),//名称
                  url:`http://top.baidu.com/buzz?b=${id}&c=1&fr=topcategory_c1`//此URL地址用来进行下一步请求
              }
              items.push(item);//向数组中添加此元素
          });
          callback(null,items);//把数组传递给回调函数
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