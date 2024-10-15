import kss from "kss";

export function kssConverter() {
  return kss({
    source: app.path.src.styleguide, // Укажите путь к вашим стилям
    destination: app.path.dist.styleguide, // Укажите путь к выходной директории
    // Другие опции KSS, если необходимо
  });
}

// import buildStyleguide from "@hidoo/gulp-task-build-styleguide-kss";

// export function kssConverter() {
//   return buildStyleguide({
//     name: "styleguide:main",
//     src: app.path.src.allStyles,
//     dest: app.path.dist.styleguide,
//     //css: ["./path/from/styleguide/to/css/extra.css"],
//     js: [app.path.dist.styleguideScripts],
//     homepage: `${app.path.dist.styleguide}/README.md`,
//     placeholder: "{{modifier_class}}",
//     "nav-depth": 2,
//     mask: "*-guide.css",
//     //builder: "/path/to/builder",
//     verbose: true,
//   });
// }
