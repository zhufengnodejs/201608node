/**
 通过编写一个编译less文件的任务来了解插件的使用和gulp工作流程
 1. 引入gulp
 2. 安装插件 npm install gulp-less --save-dev
 3. 在gulpfile.js配置文件中使用此插件

 定义任务的套路
 1. gulp.src 先得到要处理的文件流,里面放放置着一个一个的待处理的文件
 2. 把此流导入到插件中进行编译处理
 3. 处理完成后把处理后的结果导入到gulp.dest可写流中进行保存到文件系统中
 **/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var babel  = require('gulp-babel');
var connect = require('gulp-connect');
var minifyHTML = require('gulp-minify-html');
/**va
 * 文件流里里是一个一个文件对象
 * 文件对象属性 1. 文件名 2 文件内容
 * 启动一个服务器，预览我们的项目。
 */
gulp.task('server',function(){
  connect.server({
      root:'./dist',//静态文件根目录
      port:8080,
      livereload:true//可以支持自动刷新浏览器
  });
});
gulp.task('html',function(){
    //先把html进行压缩 ，然后保存到.dist目录下,再通知浏览器重新刷新
    //.pipe(connect.reload())
   gulp.src('./app/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
});
gulp.task('watch',function(){
    //监控index.html文件变化 ，当它发生变化 之后执行html任务
    gulp.watch('./app/index.html',['html'])
});
gulp.task('default',['server','watch']);


