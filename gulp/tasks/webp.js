import webp from "gulp-webp";
import flatten from "gulp-flatten";

export function webpRun() {
  return app.gulp
    .src(`${app.path.src.imagesWebp}`, { encoding: false })
    .pipe(webp())
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.dist.images));
}
