const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('default', function(){
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./index.js', './index2.js','./index.css']);
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});