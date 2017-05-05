var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./styles/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('watch:less', function() {
    gulp.watch('./styles/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch:less']);