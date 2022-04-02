import { ApiCallService } from './api-call.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-clone';
  selectedDetails: any;
  list:Post[] = [];
  constructor(private service: ApiCallService){}

     ngOnInit() {
     this.service.getPostList().subscribe(res => {
       this.list = res;
     })
  }

  onClickDetails(data:any){
    this.selectedDetails = data;
  }

  onLikePost(data:Post){
    let filterData =  this.list.indexOf(data);
    this.list[filterData].likes +=1;
  }
}
