var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    config = require('../config.js');

gulp.task('imagemin', function() {
    return gulp.src(config.path.img + '*.{jpg,png}')
        .pipe(imagemin(
            [
                pngquant({
                    quality: '80',
                    speed: 1,
                    floyd: 0
                })
            ],
            {
                interlaced: true,
                progressive: true,
                optimizationLevel: 5
            }
        ))
        .pipe(gulp.dest(config.path.img));
});