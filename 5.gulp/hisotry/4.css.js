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
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css')
var rename = require('gulp-rename')
/**
 * 文件流里里是一个一个文件对象
 * 文件对象属性 1. 文件名 2 文件内容
 */
gulp.task('css',function(){
   gulp.src('app/less/*.less')
   .pipe(less())
   .pipe(concat('all.css'))
   .pipe(gulp.dest('./dist/css'))
   .pipe(minifyCss())
   .pipe(rename(function (path) {
      path.basename += ".min";// all   all.min
   }))
   .pipe(gulp.dest('./dist/css'))
});
//fs.createReadStream().pipe(fs.createWriteStream());


