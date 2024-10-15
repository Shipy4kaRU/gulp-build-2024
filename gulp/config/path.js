//Получаем имя папки проекта
import * as nodePath from "path";
export const rootFolder = nodePath.basename(nodePath.resolve());

//Путь исходных файлов и путь результирующих файлов
export const distFolder = "dist";
export const srcFolder = "src";
export const path = {
  dist: {
    html: `${distFolder}/`,
    styles: `${distFolder}/css/`,
    scripts: `${distFolder}/js/`,
    images: `${distFolder}/img/`,
    fonts: `${distFolder}/fonts/`,
    styleguide: `${distFolder}/styleguide/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    allstyles: `${srcFolder}/styles/**/*.scss`,
    styles: `${srcFolder}/styles/styles.scss`,
    styleTheme: `${srcFolder}/styles/*-theme.scss`,
    styleguide: `${srcFolder}/styles/**/*-guide.css`,
    normilize: `${srcFolder}/styles/normalize.css`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    styleguideScripts: `${srcFolder}/styleguideScripts/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    imagesWebp: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
    fonts: `${srcFolder}/fonts/`,
  },
};
