import htmlmin from "gulp-htmlmin"
import size from 'gulp-size';
import browsersync from 'browser-sync'

export function html(){
    return app.gulp.src(app.path.src.html)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size())
        .pipe(app.gulp.dest(app.distFolder))
        .pipe(browsersync.stream())
}
