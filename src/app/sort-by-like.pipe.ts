import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByLike'
})
export class SortByLikePipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if(args === 'ASC'){
    let arr = value.sort((a,b) => a.likes-b.likes)
    return arr;
    }
 
     let arr =  value.sort((a,b) => b.likes-a.likes)
     return arr;

  }

}
