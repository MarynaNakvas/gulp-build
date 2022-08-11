import gulp from 'gulp';
import browser from 'browser-sync';

import html from './html.js';
import fonts from './fonts.js';
import styles from './styles.js';
import images from './images.js';
import scripts from './scripts.js';

const server = browser.create();

function readyReload(cb) {
  server.reload()
  cb()
};

export default function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch(
      'src/**/*.scss',
      gulp.series(
        styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)
      )
    );
    gulp.watch(
      'src/**/*.js',
      gulp.series(
        scripts, cb => gulp.src('build/js').pipe(server.stream()).on('end', cb)
      )
    );
    gulp.watch(
      'src/images/**/*.{gif,png,jpg,svg,webp}',
      gulp.series(images, readyReload)
    );
    gulp.watch('src/fonts/*', gulp.series(fonts, readyReload));
    gulp.watch('src/**/*.html', gulp.series(html, readyReload));

    return cb()
};
