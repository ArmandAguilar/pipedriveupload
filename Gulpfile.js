var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify =  require('watchify');

function complie(watch)
{
    var bundel = watchify(browserify('app.js',{debug:true}));
    function rebundle() {
      bundel
        .transform(babel, {presets: ["es2015"]})
        .bundle()
        .on('error',function (err) { console.log(err); this.emit('end') })
        .pipe(source('app.js'))
        .pipe(rename('server.js'))
        .pipe(gulp.dest('.'));
    }

    if (watch) {
      bundel.on('update',function () {
        console.log('-->Bundling...');
        rebundle();
      })
    }
    rebundle();
}

gulp.task('build', function () { return complie(); });

gulp.task('watch', function () { return complie(true); });

gulp.task('default',['build'])
