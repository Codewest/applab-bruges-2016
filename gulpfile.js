const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');


// custom logger to avoid using gulp-plumber
function logError(err) {
  console.error.bind(err);
}

gulp.task('scripts', () => {
  const bundler = browserify('src/js/app.js').transform(babelify, { presets: ['es2015'] });
  return bundler.bundle()
    .on('error', logError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', () => {
  gulp.src('./src/css/main.css')
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/css/**/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch'], () => {});
