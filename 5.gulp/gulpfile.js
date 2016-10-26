const gulp = require('gulp');
const rev = require('gulp-rev');

gulp.task('default', () =>
    gulp.src('dist/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
);