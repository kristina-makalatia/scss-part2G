'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// var cleanss = require('gulp-cleancss');

 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
     }))
    //  .pipe(cleancss({keepBreaks: false}))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel ('sass'));
});