import {deleteAsync} from 'del'

//Функция очистки каталога dist
export function clean(){
    return deleteAsync([`${app.distFolder}/*`, `!${app.distFolder}/img`, `!${app.distFolder}/fonts`]);
}

export function cleanFonts(){
  return deleteAsync([`${app.distFolder}/fonts`]);
}
