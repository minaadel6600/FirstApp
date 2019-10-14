import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  private posts :any[];
  private url :string = "https://jsonplaceholder.typicode.com/posts";
 
  constructor(private http:Http){

  }


  getAllPosts() {
  //  this.http.get(this.url).subscribe(response=>{
   //   this.posts = response.json();
   // })
      

    return this.http.get(this.url);
    }


    createPost(val){
        let post ={title : val , id : ""}
      this.http.post(this.url, JSON.stringify(post)  ).subscribe(response=>{
        this.posts.push(post);

      })
    }

    updatePost(val , input){
      let newpost ={title : input, id:val.id  }
    this.http.put(this.url + "/" + val.id , JSON.stringify(newpost)  ).subscribe(response=>{

      let index = this.posts.indexOf(val);
      this.posts[index] =newpost;

    })
  }
}
