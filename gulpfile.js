var gulp = require('gulp');
var plumber = require('gulp-plumber');
var run = require('gulp-run');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');

var SCRIPTS_PATH = 'assets/js/**/*.js';

// Scripts
gulp.task('scripts', function(cb){
    console.log('--- Starting scripts tasks ---');
        pump([
            gulp.src(SCRIPTS_PATH),
            sourcemaps.init(),
            plumber(function(err){
                console.log('--- Error on scripts tasks ---');
                console.log(err);
                this.emit('end');
            }),
            sourcemaps.write(),
            run('npm run build'),
            // gulp.dest('public/dist/js')
        ],cb
    );
});

// Watch
gulp.task('watch', function(){
    console.log('--- Starting gulp watch ---');
    gulp.watch(SCRIPTS_PATH,['scripts']);
});