import kss from "kss";
import { cleanStyleguide } from "./clean.js";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import browsersync from "browser-sync";
import { styles } from "./styles.js";
import liveServer from "live-server";
import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import size from "gulp-size";
import transform from "gulp-transform";
const sass = gulpSass(dartSass);

export function startKssLiveserver(done) {
  const kssParams = {
    port: 8181,
    host: "0.0.0.0", // Установите адрес для привязки. По умолчанию 0.0.0.0 или process.env.IP.
    root: "./src/", //app.path.src.styleguide (почему-то не понимает путь, указанный так),
    open: "/styleguide/index.html",
    //ignore: 'scss,my/templates', Путь для игнорирования, разделенный запятыми.
    file: "index.html", // Файл, который будет обслуживаться при 404.
    logLevel: 2, // 0 = только ошибки, 1 = некоторые, 2 = много.
    wait: 100,
    middleware: [
      function (req, res, next) {
        next();
      },
    ], // Массив промежуточного ПО, которое будет добавлено в стек сервера. (из докуменатции)
  };
  liveServer.start(kssParams);
  done();
}

function styleguideToCss() {
  return new Promise((resolve, reject) => {
    return app.gulp
      .src(`${app.path.src.styleguideFiles}/**/*.scss`)
      .pipe(sass().on("error", sass.logError))
      .pipe(app.gulp.dest(app.path.src.styleguideFiles))
      .on("end", resolve) // Разрешаем промис, когда поток завершен
      .on("error", reject); // Отклоняем промис в случае ошибки
  });
}

function kssScripts() {
  return app.gulp
    .src(`${app.path.src.styleguideFiles}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(
      transform(function (contents, file) {
        // Оборачиваем код в try...catch
        const wrappedCode = `
        try {
          ${contents}
        } catch (error) {
          console.error('Произошла ошибка, если элемент не найден - значит просто открыт другой стайлгайд, это не ошибка:', error);
        }
      `;
        // Возвращаем результат как Buffer иначе ошибка
        return Buffer.from(wrappedCode);
      })
    )
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(size())
    .pipe(sourcemaps.write("./"))
    .pipe(app.gulp.dest(app.path.src.styleguideFiles))
    .pipe(browsersync.stream());
}

export async function kssConverter() {
  await cleanStyleguide();
  await styleguideToCss();
  await styles(
    `${app.path.src.styleguideFiles}/**/*.scss`,
    app.path.src.styleguideFiles
  );
  await kssScripts();
  await kss({
    source: `${app.path.src.styleguideFiles}/**/*.css`,
    destination: app.path.src.styleguide,
    css: `../styleguideFiles/styles.min.css`,
    js: `../styleguideFiles/main.min.js`,
    title: "My pattern library",
    homepage: `${app.path.src.styleguideFiles}/homepage.md`,
    version: "1.0.0",
    // Другие опции KSS, если необходимо
  });
  browsersync.stream();
}
