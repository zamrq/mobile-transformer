const gulp = require('gulp');
// const less = require('gulp-less');
const concat = require('gulp-concat');
// const rename = require('gulp-rename');
const minify = require('gulp-minify');
const cssmin = require('gulp-cssmin');
const minifyejs = require('gulp-minify-ejs');


gulp.task('css', () => gulp.src([
  './assets/css/font-awesome.min.css',
  './assets/css/themify-icons.css',
  './assets/css/bootstrap.min.css',
  './assets/css/theme.css',
  './assets/css/custom.css',
])
  .pipe(concat('app.css'))
  .pipe(cssmin())
  .pipe(gulp.dest('./assets/css')));

gulp.task('js:module', () => gulp.src([
  './assets/js/jquery.min.js',
  './assets/js/bootstrap.min.js',
  './assets/js/parallax.js',
])
  .pipe(concat('app.module.js'))
  .pipe(gulp.dest('./assets/js')));

gulp.task('js:app', () => gulp.src([
  './assets/js/scripts.js',
])
  .pipe(concat('app.script.js'))
  .pipe(minify())
  .pipe(gulp.dest('./assets/js')));

gulp.task('ejs', () => gulp.src(['views/**/*.ejs'])
  .pipe(minifyejs())
  .pipe(gulp.dest('views_prod')));
