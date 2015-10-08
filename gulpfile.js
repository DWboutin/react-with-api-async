var gulp = require("gulp");
var express = require('express');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var tinylr;

gulp.task('build', function () {
  return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(plumber())
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('express', function() {
  var app = require('./index.js');
  app.use(require('connect-livereload')({port: 35729}));
  app.listen(4000, '0.0.0.0');
});

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, __dirname);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('buildWatch', ['build'], function(){
  notifyLiveReload();
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['buildWatch']);
  gulp.watch('./api/**/*.js', ['buildWatch']);
  gulp.watch('*.html', notifyLiveReload);
});

gulp.task('default', ['build', 'express', 'livereload', 'watch'], function() {

});