const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('prepare-css', (cb) => {
    gulp.src("./src/scss/*.scss")
        .pipe(concat("styles.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest('dist/style'));
    cb();
})

gulp.task('prepare-js', (cb) => {
    gulp.src("./src/js/*.js")
        .pipe(concat("scripts.min.js"))
        .pipe(gulp.dest('dist/js'));
    cb();
})

gulp.task('prepare-img', (cb) => {
    gulp.src("./src/img/*.**")
        .pipe(gulp.dest('dist/img'));
    cb();
})

gulp.task('clean', function () {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('serve', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch('src/**/*', gulp.parallel('prepare-img', 'prepare-css', 'prepare-js'));
    gulp.watch('./**/*').on('change', reload);
});

exports.start = gulp.parallel('prepare-css', 'prepare-js', 'prepare-img');
exports.build = gulp.series('clean', gulp.parallel('prepare-css', 'prepare-js', 'prepare-img'));
exports.dev = gulp.series('serve');
