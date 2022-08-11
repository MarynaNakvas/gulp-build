import gulp from 'gulp';
import plumber from 'gulp-plumber';
import htmlhint from 'gulp-htmlhint';
import bemValidator from 'gulp-html-bem-validator';
import { htmlValidator } from 'gulp-w3c-html-validator';

export default function html() {
  return gulp.src('src/**/*.html')
    .pipe(plumber())
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.failAfterError())
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
};
