let gulp = require('gulp');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let child = require('child_process');
var typedoc = require("gulp-typedoc");

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

gulp.task('gen-docs', function ()  {
    return gulp
            .src(["lib/*.ts"])
            .pipe(typedoc({
                out: "./docs",
                module: "commonjs",
                target: "es6",
                name: "Kolekto",
                mode: "file",
                excludeNotExported: true
            }))
});

gulp.task('watch', ['build'], function() {
    gulp.watch(['lib/**/*.ts','test/**/*.ts'], ['build']);
});