import gulp from 'gulp';

export default function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
};
