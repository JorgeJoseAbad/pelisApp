//function defaultTask(cb) {
  // place code for your default task here
//  cb();
//}

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');
sass.compiler = require('node-sass');
const webserver = require('gulp-webserver');



const {
    src,
    dest,
    series,
    watch
} = require('gulp');



const paths = {

    controllers: [
      './app/components/version/version.js',
      './app/components/version/version-directive.js',
      './app/components/version/interpolate-filter.js',
      './app/core/core.module.js',
      './app/core/users/users.module.js',
      './app/core/users/users.factory.js',
      './app/core/pelicula/pelicula.module.js',
      './app/core/pelicula/pelicula.factory.js',
      './app/favoritas/favoritas.module.js',
      './app/favoritas/favoritas.component.js',
      './app/login/login.module.js',
      './app/login/login.component.js',
      './app/pelicula/pelicula.module.js',
      './app/pelicula/pelicula.component.js',
      './app/peliculas/peliculas.module.js',
      './app/peliculas/peliculas.component.js',
      './app/header/header.module.js',
      './app/header/header.directive.js',
      './app/app.js'
    ],
    estilos: ['./app/**/*.css', './app/**/*.scss'],
    distDev: './dist/',
  }

function html() {
      return src('./app/**/*.jade')
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


function buildES2015() {
    return browserify({
            entries: [paths.controllers]
        })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("app.js"))
        .pipe(dest("./dist"));
}


function startServer() {
  return src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      host:"localhost",
      port: 8000,
      path:""
    }));
}

//watch y reinicia automaticamente
watch('./app/**/*.jade', series(html));
watch('./app/**/*.scss', series(css));
watch('./app/**/*.js', series(buildES2015));
watch('./app/bower_componets/**', series(bowerComponents));

exports.build = series(buildES2015,html,css,bowerComponents,startServer);
exports.default = series(buildES2015,html,css,bowerComponents,startServer);
//exports.default = defaultTask
