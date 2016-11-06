//实现在node里类似jquey的操作
var cheerio = require('cheerio');
var $ = cheerio.load(`
<div>
  <h2 data="661" class="title title-blue">
    <a href="http://top.baidu.com/buzz?b=661&c=1&fr=topcategory_c1">热映电影</a>
  </h2>
  <h2 data="659" class="title title-brown">
    <a href="http://top.baidu.com/buzz?b=659&c=1&fr=topcategory_c1">即将上映</a>
  </h2>
</div>
`);
//使用筛选符从中提取出一个对象的集合    然后迭代这个集合
var items = [];
$('.title a').each(function(){
    var $this = $(this);//把JS对象转成jquery对象
    var href = $this.attr('href');//  取得a标签 的href属性
    var result = href.match(/\?b=(\d+)/);//通过正则匹配出来此分类的ID
    var item = {
        id:result[1], //结果集中的第一个分组,也就是第二个元素就是分类的ID
        name:$this.text(),//分类的名称
        url:href//分类对应的url
    }
    items.push(item);
});
console.log(items);