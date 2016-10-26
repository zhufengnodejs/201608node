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

gulp.task('less',function(){
    gulp.src('app/less/*.less')//得到源文件内容
    .pipe(less())//对源文件内容进行编译转换
    .pipe(gulp.dest('dist/css'))//把编译转换后的文件保存到dist/css目录下
});
/**
 * 监控源文件的变化 ，当发生变化之后会自动执行对应的任务数组
 */
gulp.task('default',function(){
    gulp.watch('app/less/*.less',['less']);
});

