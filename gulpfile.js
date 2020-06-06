//function defaultTask(cb) {
  // place code for your default task here
//  cb();
//}

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('app/estilos/_estilos.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/estilos/_estilos.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('estilos/**/*.scss', ['sass']);
});

//exports.default = defaultTask
