import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscando'
})
export class BuscandoPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const resultPost=[];
    for (const item of value){
      if(item.quote.indexOf(args)>-1){
        resultPost.push(item)
      }
    }
    return resultPost;
  }

}
