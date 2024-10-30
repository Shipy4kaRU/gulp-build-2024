import newer from "gulp-newer";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import gulpIgnore from "gulp-ignore";
import size from "gulp-size";
import flatten from "gulp-flatten";

const webmanifest = function () {
  return app.gulp
    .src(`${app.path.src.webmanifest}`, { encoding: false, allowEmpty: true })
    .pipe(gulpIgnore.exclude("**/*")) // Игнорирует отсутствующие файлы
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.dist.images));
};

export function img() {
  webmanifest();
  return app.gulp
    .src(`${app.path.src.images}`, { encoding: false })
    .pipe(newer(app.path.dist.images))
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 3 }),
      ])
    )
    .pipe(size())
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.dist.images));
}
