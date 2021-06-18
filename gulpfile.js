var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('less', function() {
  gulp.src('./less/*.less')  // only compile the entry file
    .pipe(less())
    .pipe(gulp.dest('./less'))
    .pipe(cssmin().on('error', function(err) {
        console.log(err);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./less'))
});

gulp.task('less:watch', function() {
    gulp.watch('./less/*.less', ['clean', 'less']);  // Watch all the .less files, then run the less task
});

gulp.task('clean', function() {
  return gulp.src(['./less/*.css'], {read: false})
      .pipe(clean());
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task