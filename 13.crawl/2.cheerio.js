//实现在node里类似jquey的操作
var cheerio = require('cheerio');
var $ = cheerio.load(`
<div>
  <h2 data="661" class="title title-blue">
    <a href="http://top.baidu.com/buzz?b=661&amp;c=1&amp;fr=topcategory_c1">热映电影</a>
  </h2>
  <h2 data="659" class="title title-brown">
    <a href="http://top.baidu.com/buzz?b=659&amp;c=1&amp;fr=topcategory_c1">即将上映</a>
  </h2>
</div>
`);
$('.title a').each(function(){
    var $this = $(this);
    var href = $this.attr('href');
    var result = href.match(/\?b=(\d+)/);
    var item = {
        id:result[1],
        name:$this.text(),
        url:href,
    }
    console.log(item);
});