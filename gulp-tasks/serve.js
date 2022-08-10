const gulp = require('gulp')

const html = require('./html');
const fonts = require('./fonts');
const styles = require('./styles');
const images = require('./images');
const scripts = require('./scripts');

const server = require('browser-sync').create();

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
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
}
