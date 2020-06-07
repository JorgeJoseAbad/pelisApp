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
    version:'.app/components/version/',
    users:'.app/core/users/',
    core:'.app/core/',
    favoritas:'.app/favoritas/',
    pelicula: ['.app/pelicula/*.jade'],
    peliculas: ['.app/peliculas/'],
    controllers: [
      './app/components/version/version.js',
      './app/core/core.module.js',
      './app/core/users/users.module.js',
      './app/core/users/users.service.js',
      './app/favoritas/favoritas.js',
      './app/login/login.js',
      './app/pelicula/pelicula.js',
      './app/peliculas/peliculas.js',
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



exports.build = series(buildES2015,html,css,bowerComponents,startServer);
exports.default = series(buildES2015,html,css,bowerComponents,startServer);
//exports.default = defaultTask
