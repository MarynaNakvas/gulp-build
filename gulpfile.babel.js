import gulp from 'gulp';

import html from './gulp-tasks/html.js';
import fonts from './gulp-tasks/fonts.js';
import serve from './gulp-tasks/serve.js';
import clean from './gulp-tasks/clean.js';
import images from './gulp-tasks/images.js';
import styles from './gulp-tasks/styles.js';
import scripts from './gulp-tasks/scripts.js';

const tasks = gulp.parallel(
  html,
  fonts,
  styles,
  images,
  scripts,
);

export const build = gulp.series(clean, tasks);
export const start = gulp.series(build, serve);
