const gulp = require('gulp');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const rollup = require('gulp-rollup');


// custom logger to avoid using gulp-plumber
function logError(err) {
  console.error.bind(err);
}

gulp.task('scripts', () => {
  gulp.src('./src/js/app.js')
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('styles', () => {
  gulp.src('./src/css/main.css')
    .pipe(uglifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/css/**/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch'], () => {});
