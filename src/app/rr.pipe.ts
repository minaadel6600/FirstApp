import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rr'
})
export class RrPipe implements PipeTransform {

  transform(value: string, limit?:number ): any {

    if(!value) return null;

    return value.substr(0,20) + '................';
  }


}
