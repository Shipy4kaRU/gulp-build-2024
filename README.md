<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center"><strong>Easy assembly for Gulp</strong></p>
</p>   
 <p align="center">Can be used as a basis for creating your own assembly</p>
 <p align="center">+ little «Styleguide»</p>
</p>

---

## Assembly functionality:

- HTML minification
- Compilation of the CSS preprocessor
- Automatic addition of CSS prefixes
- CSS minification
- Converting ECMAScript 2015+ code to a backward compatible JavaScript version using Babel
- JavaScript minification
- Combining multiple JavaScript files into one
- Image compression
- Convert images to .webp format
- Tracking new images that haven't been compressed yet
- Font conversion to woff, woff 2 formats
- Tracking changes in files and automatically starting the reassembly
- Generation of Source Maps
- Display of file sizes in the terminal
- Local server with automatic page refresh when files change
- Creation .zip archive of the project
- Starting template index.html with attached style file, normalize.css and a js file connected for a quick start of layout
- ES6 modules support
- Adding a theme (dark/light) support
- Styleguide
- Using .webmanifest for favicons

## The structure of the src project folder:

![Изображение](./src-diagram.png "src structure")

## The structure of the dist project folder:

![Изображение](./dist-diagram.png "dist structure")

## Starting the build:

For the assembly to work, you will need to download and install node.js .  
To avoid all kinds of errors, you need to install gulp globally, but this is in case you haven't done this in other projects yet: `npm i gulp -g`. This procedure is done once and the next time you deploy a new project, you will not need to repeat this command.  
Also install the Git version control system. Git is not required for the assembly to work, but for ease of installation and further development, it is better to install it anyway.

1. Create a project folder
2. Run the git clone command in it: `git clone https://github.com/Shipy4kaRU/gulp-build-2024.git` (or download the build as an .zip archive and unzip)
3. After all the sources have been downloaded from the remote repository, enter the command in the console: `npm i` (node.js must be installed for this)
4. Create directories and files according to the project structure
5. Run the command: gulp (run the default task)
6. Coding and enjoying the automatic build of the project.

#### At startup, in addition to the assembly, the “Styleguide” will be launched, where in tab 0. Overview will be its description. Below is the necessary structure of the library files. To understand it better - you can look through the styleguide files I have already created.

![Изображение](./styleguide-diagram.png "Styleguide structure")

## NPM packages used:

- ["@babel/core"](https://www.npmjs.com/package/@babel/core): The core of Babel
- ["@babel/preset-env"](https://www.npmjs.com/package/@babel/preset-env): Preset for Babel compilation
- ["browser-sync"](https://www.npmjs.com/package/browser-sync): Automatic updating of the site when files are changed
- ["del"](https://www.npmjs.com/package/del): Deleting directories and files
- ["gulp"](https://www.npmjs.com/package/gulp): Gulp Collector
- ["gulp-autoprefixer"](https://www.npmjs.com/package/gulp-autoprefixer): Automatic addition of prefixes to CSS
- ["gulp-babel"](https://www.npmjs.com/package/gulp-babel): Converts JavaScript to the old standard
- ["gulp-clean-css"](https://www.npmjs.com/package/gulp-clean-css): Minification and optimization of CSS files
- ["gulp-concat"](https://www.npmjs.com/package/gulp-concat): Combining multiple files into one
- ["gulp-flatten"](https://www.npmjs.com/package/gulp-flatten): Deleting or replacing relative file paths
- ["gulp-fonter"](https://www.npmjs.com/package/gulp-fonter): Converting fonts to .ttf and woff formats
- ["gulp-htmlmin"](https://www.npmjs.com/package/gulp-htmlmin): Minification of HTML files
- ["gulp-imagemin"](https://www.npmjs.com/package/gulp-imagemin): Image Compression
- ["gulp-newer"](https://www.npmjs.com/package/gulp-newer): Tracking only new files
- ["gulp-rename"](https://www.npmjs.com/package/gulp-rename): Renaming files
- ["gulp-replace"](https://www.npmjs.com/package/gulp-replace): String replacement plugin for gulp
- ["gulp-sass"](https://www.npmjs.com/package/gulp-sass): Compilation of Sass and Scss files
- ["gulp-size"](https://www.npmjs.com/search?q=gulp-size): Displaying information about file sizes in the terminal
- ["gulp-sourcemaps"](https://www.npmjs.com/package/gulp-sourcemaps): A code line map for developer tools
- ["gulp-transform"](https://www.npmjs.com/package/gulp-transform): Gulp plugin for applying custom transformations to file contents
- ["gulp-ttf2woff2"](https://www.npmjs.com/package/gulp-ttf2woff2): Converting fonts from .ttf format to woff2
- ["gulp-uglify"](https://www.npmjs.com/package/gulp-uglify): Compression and optimization of JavaScript code
- ["gulp-webp"](https://www.npmjs.com/package/gulp-webp): Convert images to WebP
- ["gulp-zip"](https://www.npmjs.com/package/gulp-zip): Creation a .zip archive
- ['kss'](https://www.npmjs.com/package/kss): This is a Node.js implementation of KSS, “documentation syntax for CSS”
- ['live-server'](https://www.npmjs.com/package/live-server): This is a little development server with live reload capability
- ["sass"](https://www.npmjs.com/package/sass): The Sass compiler

## Build Commands:

- `gulp`: processes html, css, and js files, optimizes new photos, and transfers everything to the **dist/** folder (without fonts)
- `gulp fonts`: converts fonts in woff,woff2 format and transfers it all to the **dist/fonts/** folder
- `gulp zip`: creates the .zip archive of the dist folder (the name is taken from the main folder of the project) and places it in the main folder of the project on an equal footing with the folders dist and src
- `gulp webp`: convert images to .webp format.

---
