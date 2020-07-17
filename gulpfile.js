/**
 * Settings
 * Turn on/off build features
 */

var settings = {
	clean: true,
	scripts: true,
	polyfills: true,
	styles: true,
	svgs: true,
	copy: false,
	reload: true,
};

/**
 * Paths to project folders
 */

var paths = {
	input: 'src/',
	output: 'dist/',
	scripts: {
		input: 'src/js/*',
		polyfills: '.polyfill.js',
		output: 'dist/js/',
	},
	styles: {
		input: 'src/styles.scss',
		output: 'dist/css/',
	},
	svgs: {
		input: 'src/svg/*.svg',
		output: 'dist/svg/',
	},
	copy: {
		input: 'src/copy/**/*',
		output: 'dist/',
	},
	reload: './dist/',
};

/**
 * Gulp Packages
 */

// General
var { gulp, src, dest, watch, series, parallel } = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var package = require('./package.json');
var bourbon = require('node-bourbon');

bourbon.with('./src/styles.scss');

// Styles
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var prefix = require('autoprefixer');
var minify = require('cssnano');

// Remove pre-existing content from output folders
var cleanDist = function (done) {
	// Make sure this feature is activated before running
	if (!settings.clean) return done();

	// Clean the dist folder
	del.sync([paths.output]);

	// Signal completion
	return done();
};

// Process, lint, and minify Sass files
var buildStyles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.styles) return done();

	// Run tasks on all Sass files
	return src(paths.styles.input)
		.pipe(
			sass({
				outputStyle: 'expanded',
				includePaths: bourbon.includePaths,
			})
		)
		.pipe(dest(paths.styles.output))
		.pipe(rename({ suffix: '.min' }))
		.pipe(
			postcss([
				prefix({
					cascade: true,
					remove: true,
				}),
				minify({
					discardComments: {
						removeAll: true,
					},
				}),
			])
		)
		.pipe(dest(paths.styles.output));
};

// Copy static files into output folder
var copyFiles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.copy) return done();

	// Copy static files
	return src(paths.copy.input).pipe(dest(paths.copy.output));
};

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(cleanDist, parallel(buildStyles, copyFiles));
