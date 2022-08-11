import gulp from 'gulp';

export default function fonts() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
};
