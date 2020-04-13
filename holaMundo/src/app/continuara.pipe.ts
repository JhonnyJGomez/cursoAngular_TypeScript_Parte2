import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(texto:string): string {
    if (texto.length > 190){
      texto = texto.substring(0,190);
      texto += '...  Continurá ...'
    }
    return texto
  }

}
