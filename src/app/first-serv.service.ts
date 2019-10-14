import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServService {

  getAllData(){

    return ['A','B','c']
}


}
