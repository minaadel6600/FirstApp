import { Component, OnInit } from '@angular/core'; 
import { Http } from '@angular/http';
import { NewServiceService } from './Services/new-service.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  /*
  posts :any[];
  url :string = "https://jsonplaceholder.typicode.com/posts";


  constructor(private newSere:NewServiceService){

  }
  ngOnInit():void {
    this.posts = this.newSere.getAllPosts();
    }
*/

ngOnInit() { }
 
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}

    
}


