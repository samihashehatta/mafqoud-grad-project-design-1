//intialise gulp 
var gulp = require('gulp'); 

// include plug-ins
var concat      = require('gulp-concat');
var stripDebug  = require('gulp-strip-debug');
// var uglify      = require('gulp-uglify');
// var cleanCSS    = require('gulp-clean-css');
var sass        = require('gulp-sass');
/*
* Name of the coler theme
* Replace purple to red for red
* And uncomment in scss/color/color-theme to change to red 
*/
var name="purple"
gulp.task(name, function () {
  console.log("Compiling SAAS...");
  gulp.src("color/color-theme.scss")
    .pipe(concat(name+"-theme.css"))
    .pipe(sass())
    // .pipe(cleanCSS())
    .pipe(gulp.dest("../css/colors/")); 
});
/*
* Html Base Style Scss gulp Task
*/
gulp.task('style', function () {
  console.log("Compiling SAAS...");
  gulp.src("style.scss")
    .pipe(concat("style.css"))
    .pipe(sass())
    // .pipe(cleanCSS())
    .pipe(gulp.dest("../css/")); 
});

/*
* start gulp watch for working changes
*/
gulp.task('watch', function () {
	gulp.watch(['../scss/**/*.scss'], [name,'style']);			
});