import { AbstractControl, ValidationErrors, ControlContainer } from '@angular/forms';


export class testValidator{
static nospaceAllow(conrol:AbstractControl) : ValidationErrors | null {
  if((conrol.value as string).indexOf(' ') != -1 ){
      return {nospaceAllow:true};
  }
  else{
      return null;
  }
}
}