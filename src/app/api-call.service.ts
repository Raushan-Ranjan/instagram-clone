import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';



@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  list = [{
    "id":1,
    "name":"Ram",
    "timeStamp":"12/12/12",
    "imageUrl":"E:\Angular\instagram-clone\src\assets/image01.jpg",
    "likes":6,
    "dislikes":3,
    "description":"hey there i am using instagram"
  },
  {
    "id":2,
    "name":"Shyam",
    "timeStamp":"12/12/12",
    "imageUrl":"E:\Angular\instagram-clone\src\assets/image01.jpg",
    "likes":90,
    "dislikes":8,
    "description":"hey there i am using instagram"
  },{
    "id":3,
    "name":"Mohan",
    "timeStamp":"12/12/12",
    "imageUrl":"E:\Angular\instagram-clone\src\assets/image01.jpg",
    "likes":13,
    "dislikes":5,
    "description":"hey there i am using instagram"
  }]

  postList:Post[] = []
  constructor(private http: HttpClient) { }

  getPostList(){
  return this.http.get<Post[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json')
  }

}
