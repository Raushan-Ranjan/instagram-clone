import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() list: Post[]= [];
  @Output() selectedDetails = new EventEmitter<Post>();
  sortBy:string = "ASC";
  constructor(private service:ApiCallService) { }

  ngOnInit(): void {
    // this.service.getPostList();
  }

  onClickDetails(data:any){
    this.selectedDetails.emit(data);
  }

  onSort(){
    if(this.sortBy === 'ASC'){
      this.sortBy = 'DSC'
    }else{
      this.sortBy = 'ASC'
    }
  }
}
