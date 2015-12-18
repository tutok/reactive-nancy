/// <binding BeforeBuild='eslint, js' ProjectOpened='watch' />
"use strict";

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');

var connect = require('gulp-connect');
var open = require('gulp-open');



var config = {
    paths: {
        html: '',
        jsSource: './Content/js/src/app.js',
        jsDestination: './Content/js'
    }
}

gulp.task('js', function() {
    browserify(config.paths.jsSource)
        .transform(babelify, { presets: ['es2015', 'react', 'stage-2'] })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('app.min.js'))
        .pipe(gulp.dest(config.paths.jsDestination));
});

gulp.task('eslint', function() {
    return gulp.src(config.paths.jsSource)
        //.pipe(eslint('eslint.config.json'))
        .pipe(eslint({
                extends: 'eslint:recommended',
                "parser": "babel-eslint",
                "ecmaFeatures": {
                    "jsx": true
                },
                "env": {
                    "browser": true,
                    "node": true,
                    "jquery": true
                },
                "rules": {
                    "quotes": 0,
                    "no-trailing-spaces": 0,
                    "eol-last": 0,
                    "no-unused-vars": 0,
                    "no-underscore-dangle": 0,
                    "no-alert": 0,
                    "no-lone-blocks": 0
                },
                "globals": {
                    jQuery: true,
                    $: true
                }
            }
        ))
        .pipe(eslint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.jsSource, ['js', /*'eslint'*/]);
});

gulp.task('default', ['js', /*'eslint',*/ 'watch']);