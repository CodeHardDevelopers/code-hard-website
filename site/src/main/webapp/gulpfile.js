var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('./css/layout.scss')
    .pipe(sourcemaps.init())
    .pipe(compass({
      project: path.join(__dirname, '/'),
      css: 'css',
      sass: 'css',
      sourcemap: true,
      environment: 'production',
      style: 'compressed'
    }))
    .on("error", console.log.bind(console))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(livereload());
});

gulp.task('js', function() {
  gulp.src('./js/app.js')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./css/layout.scss', ['sass']);
  gulp.watch('index.html', ['html']);
  gulp.watch('./js/app.js', ['js']);
});
