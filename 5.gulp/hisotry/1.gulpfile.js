/**
 * 1. 定义任务
 * 2. 执行任务
 **/
var gulp = require('gulp');
/**
 * 1. 任务的名称
 * 2. 任务的定义函数
 */
gulp.task('hello',function(){
   console.log('world');
});

gulp.task('default',function(){
    console.log('default');
});