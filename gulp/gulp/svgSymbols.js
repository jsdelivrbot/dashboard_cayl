var gulp       = require('gulp'),
    svgSymbols = require('gulp-svg-symbols'),
    config = require('../config.js');

gulp.task('svgSymbols', function () {
    console.log('svg-symbols');

    return gulp.src(config.path.svgs + '*.svg')
        .pipe(svgSymbols({
            slug: function(name) {
                return 'svg-' + name;
            },
            svgClassname: 'svg-symbols',
            templates: ['default-svg'],
        }))
        .pipe(gulp.dest(config.path.img));
});