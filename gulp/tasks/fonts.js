import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
import flatten from 'gulp-flatten';

export function otfConvert(){
  return app.gulp.src(`${app.srcFolder}/fonts/**/*.otf`, {encoding: false})
  .pipe(fonter({
    formats: ['woff','ttf']
  }))
  .pipe(app.gulp.dest(app.path.src.fonts))
}

export function ttfConvert(){
  return app.gulp.src(`${app.srcFolder}/fonts/**/*.ttf`, {encoding: false})
  .pipe(fonter({
    formats: ['woff']
  }))
  .pipe(app.gulp.dest(app.path.src.fonts))
  .pipe(app.gulp.src(`${app.srcFolder}/fonts/**/*.ttf`, {encoding: false}))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.src.fonts))
}

export function exportFonts(){
  return app.gulp.src(`${app.srcFolder}/fonts/**/*.{woff,woff2}`, {encoding: false})
  .pipe(flatten())
  .pipe(app.gulp.dest(app.path.dist.fonts))
}
