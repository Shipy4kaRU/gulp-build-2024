import webp from "gulp-webp";

export function webpRun() {
  return app.gulp
    .src(`${app.path.src.imagesWebp}`, { encoding: false })
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.dist.images));
}
