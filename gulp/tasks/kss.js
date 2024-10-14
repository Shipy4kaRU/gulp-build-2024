import kss from "gulp-kss";

export function kssConverter() {
  return app.gulp.src(app.path.src.styles).pipe(
    kss({
      destination: app.path.dist.kss,
      //template: "", <--- next update
    })
  );
}
