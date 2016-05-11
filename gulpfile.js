var gulp = require('gulp');
var gulpTask = require('coreutil/gulptask');

gulp.task('default', function () {
    return gulpTask(['./core.js', './utils.js', './corecy.js', './utilscy.js'], [], "./src/main/resources/dist");
});