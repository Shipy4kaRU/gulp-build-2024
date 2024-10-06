import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import size from "gulp-size";
import browsersync from "browser-sync";

export function scripts() {
  return app.gulp
    .src(app.path.src.scripts)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false, // Отключаем преобразование модулей
            },
          ],
        ],
      })
    )
    .pipe(uglify())
    .pipe(size())
    .pipe(sourcemaps.write(".", { includeContent: true }))
    .pipe(app.gulp.dest(app.path.dist.scripts))
    .pipe(browsersync.stream());
}
