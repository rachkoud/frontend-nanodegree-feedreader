'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  w3cjs = require('gulp-w3cjs'),
  gulpW3cCss = require('gulp-w3c-css'),
  path = require('path'),
  gutil = require('gulp-util'),
  notify = require('gulp-notify'),
  webserver = require('gulp-webserver');

// app contains the sources and build has the optimizations
var bases = {
  app: path.join(__dirname, '')
};

// Paths to various files
var paths = {
  scripts: ['js/jasmine/spec/feedreader.js'],
  appStyles: [path.join(bases.app, 'css', 'style.css')],
  content: ['index.html']
}

var gulpOptionsApp = { cwd: bases.app };

// JS Hint
gulp.task('jshint', function() {
  return gulp.src(paths.scripts, gulpOptionsApp)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
      title: 'JSHint',
      message: 'JSHint Passed. Let it fly!',
    }))
});

// Validate HTML against W3C
gulp.task('w3c-html', function() {
  return gulp.src(paths.content, gulpOptionsApp)
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
});

// Validate CSS agains W3C with gulp w3c-css module
gulp.task('w3c-css', function() {
  return gulp.src(path.join(bases.app, 'css', 'style.css'))
    .pipe(gulpW3cCss())
    .pipe(gutil.buffer(function(err, files) {
      console.log(err);
      files.forEach(function(file, index, array) {
        var result = JSON.parse(file.contents.toString());

        console.log(result);
      });
      // err - an error encountered
      // files - array of validation results
      // files[i].contents is empty if there are no errors or warnings found
    }));
});

// Analyze HTML against W3C, JSHint scripts
gulp.task('analyze', ['w3c-css', 'w3c-html', 'jshint'], function() {});

// Launches a test webserver
gulp.task('webserver', function() {
  gulp.src(bases.app)
    .pipe(webserver({
      livereload: true,
      port: 1111
    }));
});

gulp.task('default', ['webserver']);