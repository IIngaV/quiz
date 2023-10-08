const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var replace = require('gulp-replace');

const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};

gulp.task('images', function () {
  gulp.src('assets/img//*')
    .pipe(gulp.dest('build/img'));
  
    return gulp.src('build/index.html')
    .pipe(replace('src="../img/', 'src="img/'))
    .pipe(gulp.dest('build'));
});

gulp.task('scripts', function () {
  gulp.src('assets/js//*')
    .pipe(gulp.dest('build/img'));
  
    return gulp.src('build/index.html')
    .pipe(replace('src="../js/', 'src="js/'))
    .pipe(gulp.dest('build'));
});

// Reload Server
async function reload() {
  server.reload();
}

// Sass compiler
async function compileSass() {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
}

// Copy assets after build
async function copyAssets() {
  gulp.src(['assets/**/*'])
    .pipe(gulp.dest(paths.scripts.dest));
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await copyAssets();
  reload();
}

async function includeHTML() {
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
  ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}
exports.includeHTML = includeHTML;

exports.default = async function () {
  // Init serve files from the build folder
  server.init({
    server: {
      baseDir: paths.scripts.dest
    }
  });
  // Build and reload at the first time
  buildAndReload();
  // Watch Sass task
  watch('./assets/scss/**/*.scss', series(compileSass));
  // Watch task
  watch(["*.html", "assets/**/*"], series(buildAndReload));
};
