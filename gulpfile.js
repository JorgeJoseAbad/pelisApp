//function defaultTask(cb) {
  // place code for your default task here
//  cb();
//}

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
sass.compiler = require('node-sass');
const webserver = require('gulp-webserver');



const {
    src,
    dest,
    series,
    watch
} = require('gulp');



const paths = {
    version:'.app/components/version/',
    users:'.app/core/users/',
    core:'.app/core/',
    favoritas:'.app/favoritas/',
    pelicula: ['.app/pelicula/*.jade'],
    peliculas: ['.app/peliculas/'],
    estilos: ['./app/**/*.css', './app/**/*.scss'],
    distDev: './dist/',
  }

function html() {
      return src(paths.pelicula)
          .pipe(jade())
          .pipe(dest(paths.distDev));
}

function css() {
    return src(paths.estilos)
        .pipe(sass())
        .pipe(dest(paths.distDev));
}

function bowerComponents() {
    return src('./app/bower_components/**')
        .pipe(dest('./dist/bower_components/'));
}

function startServer() {
  return src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      host:"localhost",
      port: 8000,
      path:""
    }));
}

// app/index.html
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


gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  return gulp.src(paths.pelicula)
    .pipe(jade())
    .pipe(gulp.dest(paths.distDev))

});

exports.build = series(html,css,bowerComponents,startServer);
exports.default = series(html,css,bowerComponents,startServer);
//exports.default = defaultTask
