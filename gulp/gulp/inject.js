var gulp = require('gulp'),
    series = require('stream-series'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    config = require('../config.js');

gulp.task('inject', function() {
    console.log('inject');

    var initJsStream = gulp.src([config.path.app + '**/common/utils.js'], { read: false, addRootSlash: true });
    var mainJsStream = gulp.src([config.path.app + 'js/*.js'], { read: false, addRootSlash: true });
    var mainCssStream = gulp.src([config.path.tmp + '**/*.css'], { read: false, addRootSlash: true });
    
    return gulp.src(config.path.tmp + '**/*.html')
        .pipe(
            inject(series(initJsStream, mainJsStream, mainCssStream),
                {
                    transform: function (filepath) {
                        var filename;
                        if (filepath.match(/^\/app\/js\/*/)) {
                            filename = filepath.slice(4);
                            return '<script src="' + filename + '"></script>';
                        } else if (filepath.match(/^\/.tmp\/dist\/css\/*/)) {
                            filename = filepath.slice(10);
                            return '<link rel="stylesheet" href="' + filename + '">';
                        }
                    }
                }
            )
        )
        .pipe(reload({stream:true}))
        .pipe(gulp.dest(config.path.tmp));
});