import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  getAll(){
    return  ["c","c#","c++","java"];
   }
}
