var gulp = require('gulp'),
	watch = require('gulp-watch'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	csscomb = require('gulp-csscomb'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css');


gulp.task('default', function() {
	gulp.start('movefonts', 'styles', 'scripts', 'watch');
});

gulp.task('styles', function() {
	return gulp.src([
			'thirdparty/bootstrap/dist/css/bootstrap.min.css',
			'thirdparty/font-awesome/css/font-awesome.min.css',
			'app/less/jagged.less'
		])
		.pipe(less())
		.pipe(csscomb())
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(rename('jagged.min.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(notify("New jagged.min.css file generated."));
});

gulp.task('movefonts', function() {
	gulp.src([
		'thirdparty/font-awesome/fonts/*',
		'thirdparty/bootstrap/dist/fonts/*'
	])
	.pipe(gulp.dest('app/fonts/'))
})

gulp.task('scripts', function() {
	return gulp.src([
			'thirdparty/angular/angular.min.js',
			'app/js/src/module.jagged.js', 
			'app/js/src/jagged/*.js'
		])
		.pipe(concat('jagged.min.js'))
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest('app/js/'))
		.pipe(notify("New jagged.min.js file generated."));
});

gulp.task('watch', function() {
	gulp.watch('app/js/src/*.js', ['scripts']);
	gulp.watch('app/less/*.less', ['styles']);
})