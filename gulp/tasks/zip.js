import {deleteAsync} from 'del'
import zip from 'gulp-zip'
import {rootFolder} from '../config/path.js';

export function zipRun(){
  deleteAsync([`./*.zip`]);
    return app.gulp.src(`${app.distFolder}/**/*`)
      .pipe(zip(`${rootFolder}.zip`))
      .pipe(app.gulp.dest(`./`))
}
