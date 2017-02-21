let gulp = require('gulp');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let child = require('child_process');

let tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    try {
        console.log(child.execSync("tsc").toString());
        console.log("Compiled successfully")
    }
    catch(e) {
        console.error(e.stdout.toString());
    }

});

gulp.task('build-test', function () {
    try {
        console.log(child.execSync("tsc").toString());
        console.log("Compiled successfully")
    }
    catch(e) {
        console.error(e.stdout.toString());
    }

});

gulp.task('watch', ['build'], function() {
    gulp.watch(['lib/**/*.ts','test/**/*.ts'], ['build']);
});