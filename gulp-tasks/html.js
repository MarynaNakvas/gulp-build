const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');
const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');


module.exports = function html() {
  return gulp.src('src/**/*.html')
    .pipe(plumber())
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.failAfterError())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}
