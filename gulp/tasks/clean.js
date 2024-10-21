import { deleteAsync } from "del";

//Функция очистки каталога dist
export function clean() {
  return deleteAsync([
    `${app.distFolder}/*`,
    `!${app.distFolder}/img`,
    `!${app.distFolder}/fonts`,
  ]);
}

//Функция очистки шрифтов
export function cleanFonts() {
  return deleteAsync([`${app.distFolder}/fonts`]);
}

//Функция очистки Styleguide
export function cleanStyleguide() {
  return deleteAsync(
    [
      `${app.srcFolder}/styleguide`,
      `${app.path.src.styleguideFiles}/styles.min.css`,
      `${app.path.src.styleguideFiles}/styles.min.css.map`,
      `${app.path.src.styleguideFiles}/main.min.js`,
      `${app.path.src.styleguideFiles}/main.min.js.map`,
    ],
    { force: true }
  );
}
