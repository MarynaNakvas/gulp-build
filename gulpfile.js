const gulp = require('gulp');

const html = require('./gulp-tasks/html');
const fonts = require('./gulp-tasks/fonts');
const serve = require('./gulp-tasks/serve');
const clean = require('./gulp-tasks/clean');
const images = require('./gulp-tasks/images');
const styles = require('./gulp-tasks/styles');
const scripts = require('./gulp-tasks/scripts');

const tasks = gulp.parallel(
  html,
  fonts,
  styles,
  images,
  scripts,
);
const build = gulp.series(clean, tasks);

module.exports.start = gulp.series(build, serve);
module.exports.build = gulp.series(build);
