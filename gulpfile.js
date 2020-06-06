//function defaultTask(cb) {
  // place code for your default task here
//  cb();
//}

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var paths = {
    version:'.app/components/version/',
    users:'.app/core/users/',
    core:'.app/core/',
    favoritas:'.app/favoritas/',
    pelicula: '.app/pelicula/',
    peliculas: '.app/peliculas/',
    estilos: ['./app/**/*.css', './app/**/*.scss'],
    distDev: './dist',
  }

//compile
gulp.task('sass', function () {
  return gulp.src(paths.estilos)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.distDev));
});

//compile and watch
gulp.task('sass:watch', function() {
  gulp.watch(paths.styles, ['sass']);
});



//exports.default = defaultTask
