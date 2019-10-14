import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
