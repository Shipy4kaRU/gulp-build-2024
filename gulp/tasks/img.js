import newer from 'gulp-newer'
import imagemin from 'gulp-imagemin'
import size from 'gulp-size'
import flatten from 'gulp-flatten';

export function img(){
  return app.gulp.src(`${app.path.src.images}`, {encoding: false})
  .pipe(newer(app.path.dist.images))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(size())
  .pipe(flatten())
  .pipe (app.gulp.dest(app.path.dist.images))
}
