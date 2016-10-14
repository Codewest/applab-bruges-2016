const gulp = require('gulp');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');

// custom logger to avoid using gulp-plumber
function logError(err) {
  console.error.bind(err);
}

gulp.task('scripts', () => {
  rollup({
      entry: './src/js/app.js'
  })
  .pipe(source('app.js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('styles', () => {
  gulp.src('./src/css/main.css')
    .pipe(uglifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', () => {
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('css/**/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch'], () => {});
