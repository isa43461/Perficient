import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(ninjas: any, term: any): any {
    if(term == undefined) return ninjas;
    return ninjas.filter(function(ninja){
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }
}
