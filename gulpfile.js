// Импорт модулей
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";
import { distFolder } from "./gulp/config/path.js";
import { srcFolder } from "./gulp/config/path.js";

// Передача значений в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  distFolder: distFolder,
  srcFolder: srcFolder,
};

// Импорт задач
import { html } from "./gulp/tasks/html.js";
import { clean } from "./gulp/tasks/clean.js";
import { styles } from "./gulp/tasks/styles.js";
import { normilize } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { img } from "./gulp/tasks/img.js";
import { watch } from "./gulp/tasks/watch.js";
import { cleanFonts } from "./gulp/tasks/clean.js";
import { otfConvert } from "./gulp/tasks/fonts.js";
import { ttfConvert } from "./gulp/tasks/fonts.js";
import { exportFonts } from "./gulp/tasks/fonts.js";
import { zipRun } from "./gulp/tasks/zip.js";
import { webpRun } from "./gulp/tasks/webp.js";
import { colorTheme } from "./gulp/tasks/styles.js";
import { kssConverter } from "./gulp/tasks/kss.js";
import { startKssLiveserver } from "./gulp/tasks/kss.js";

// Выполнение сценария по умолчанию
gulp.task(
  "default",
  gulp.series(
    clean,
    normilize,
    kssConverter,
    gulp.parallel(
      html,
      styles.bind(this, path.src.styles, path.dist.styles),
      colorTheme,
      scripts,
      img,
      webpRun
    ),
    startKssLiveserver,
    watch
  )
);

// Сценарий обработки шрифтов
gulp.task(
  "fonts",
  gulp.series(cleanFonts, otfConvert, ttfConvert, exportFonts)
);

// Сценарий архивирования готовой версии проекта
gulp.task("zip", zipRun);

// Сценарий конвертации изображений в формат .webp
gulp.task("webp", webpRun);

// Регистрация задачи KSS
gulp.task("kss", kssConverter);
