//导入工具包require("node_modules")
var gulp = require("gulp");
var less = require("gulp-less");
var scss = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

//开启一个服务
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true //热更新
	})
})

//编译less任务
gulp.task('testLess',function () {
	gulp.src('static/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/static/css'))
		.pipe(connect.reload())
})
//scss编译
gulp.task('testScss',function () {
	gulp.src('static/scss/main.scss')
		.pipe(scss())
		.pipe(gulp.dest('dist/static/css'))
		.pipe(connect.reload())
})
//合并js
gulp.task("concatJS",function(){
	gulp.src(["static/js/*.js"])
		// .pipe(concat("index.js"))
		.pipe(gulp.dest('dist/static/js'))
		.pipe(connect.reload())
})
//处理images
gulp.task('imagemin', function() {
	gulp.src('static/images/**/*.{png,jpg,gif}')
		// .pipe(imagemin())
  	.pipe(gulp.dest('dist/static/images/'))
		.pipe(connect.reload())
});

//处理index
gulp.task('copy-index',function () {
	gulp.src('index.html')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload())
})
//处理libs
gulp.task('copy-libs', function() {
   	gulp.src('static/libs/**/*')
   		.pipe(gulp.dest('dist/static/libs'))
			.pipe(connect.reload())
});
//处理tpl
gulp.task('copy-tpl', function() {
   	gulp.src('tpl/**/*')
   		.pipe(gulp.dest('dist/tpl'))
			.pipe(connect.reload())
});
gulp.task('build',['testLess','concatJS','imagemin','copy-index','copy-libs','copy-tpl'], function() {
    console.log("ok");
});

gulp.task('watch', function() {
    gulp.watch('index.html',["copy-index"]);
    gulp.watch('static/libs/**/*',["copy-libs"]);
    gulp.watch('tpl/**/*',["copy-tpl"]);
    gulp.watch('static/less/**/*',["testLess"]);
    gulp.watch('static/js/**/*',["concatJS"]);
    gulp.watch('static/images/**/*',["imagemin"]);
});

gulp.task("default",["server","watch"]);
