import { Component, OnInit } from '@angular/core';
import { DBservice } from '../SerTest';
import { RestService } from 'src/rest.service';
import { FirstServService } from '../first-serv.service';
 
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'first',
  templateUrl:'test-com.component.html'  ,
  styleUrls: ['./test-com.component.css']
})
export class TestComComponent {

posts :any[];
  defaultVal  = 'courses';
  setVal(SelectedValue){
    debugger;
this.defaultVal = SelectedValue;
  }

  isActive = true;
cources;
imgURl = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";
  constructor(FirstServService:FirstServService){

    this.cources =FirstServService.getAllData();
  }

  testVal;
  fun1(firstName){ 
    this.testVal = firstName;
  }

}
