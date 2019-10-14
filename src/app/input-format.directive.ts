import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor() { }

 @HostListener('focus') onfoucus(){
   window.alert("focus");

  }

  @HostListener('blur') onBlur(){
    window.alert("blure");
  }

}
