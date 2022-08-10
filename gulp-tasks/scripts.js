const gulp = require('gulp');
const plumber = require('gulp-plumber');


module.exports = function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
}
