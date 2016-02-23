var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function(){
  gulp.src(['dev/scss/main.scss'])
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'))
});


gulp.task('watch', function(){
  gulp.watch('dev/scss/**/*.scss', ['sass'])
});


gulp.task('default', ['sass', 'watch']);