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
/**va
 * 文件流里里是一个一个文件对象
 * 文件对象属性 1. 文件名 2 文件内容
 */
gulp.task('js',function(){
   //指定要合并的文件，如果有多个文件夹的话可以放置一个数组
   gulp.src(['app/js/bb.js','app/js/aa.js'])
       //把多个JS文件合并成一个文件并指定合并后的文件名
       .pipe(babel({presets:["es2015"]}))
       .pipe(concat('all.js'))
       .pipe(gulp.dest('./dist/js'))
       .pipe(uglify())
       .pipe(rename('all.min.js'))
       //把合并后的唯一的文件all.js保存到dist/js目录下
       .pipe(gulp.dest('./dist/js'))
});
//fs.createReadStream().pipe(fs.createWriteStream());


