//Импорт задач
import { html } from "./html.js";
import { styles } from "./styles.js";
import { colorTheme } from "./styles.js";
import { scripts } from "./scripts.js";
import { img } from "./img.js";
//import { kssConverter } from "./kss.js";
import browsersync from "browser-sync";
import { kssConverter } from "./kss.js";
import gulp from "gulp";

// Отслеживание изменений в файлах и запуск лайв сервера
export function watch() {
  browsersync.init({
    server: {
      baseDir: `./${app.distFolder}`,
    },
    cors: true,
    notify: false,
    ui: false,
  });
  app.gulp.watch(app.path.dist.html).on("change", browsersync.reload);
  app.gulp.watch(app.path.src.html, html);
  app.gulp.watch(
    app.path.src.allstyles,
    styles.bind(this, app.path.src.styles, app.path.dist.styles)
  );
  app.gulp.watch(app.path.src.styleTheme, colorTheme);
  app.gulp.watch(
    [
      `${app.path.src.styleguideFiles}/**/*.{scss,js,md}`,
      `!${app.path.src.styleguideFiles}/main.min.js`,
      `!${app.path.src.styleguideFiles}/main.min.js.map`,
    ],
    kssConverter
  );
  app.gulp.watch(app.path.src.scripts, scripts);
  app.gulp.watch(app.path.src.images, img);
}
