var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

//gulp+browser-sync
//静态服务器
/*gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: ''
        }
    });
});*/
//代理
/*gulp.task('browser-sync', function(){
    browserSync.init({
        proxy: '10.35.8.49' //你的域名或IP
    });
});*/

//gulp+sass
/*gulp.task('sass', function(){
    gulp.src('sass/*.scss')
//或者    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('newcss'));
});
gulp.task('sass:watch', function(){
    gulp.watch('sass/*.scss', ['sass']);
});*/

//browser-sync + sass + css
//静态服务器 + 监听 + sass/html 文件
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: ''
    });
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('*.html').on('change', reload);
});

gulp.task('sass', function(){
    gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('newcss'))
    .pipe(reload({
        stream: true
    }));
});
gulp.task('default', ['serve']);
//gulp.task('default', function(){
//    gulp.run('sass', 'sass:watch');
//    gulp.run('browser-sync');
//});