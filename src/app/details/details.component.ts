import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() selectedDetails:any;
  @Output() onLikePost = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLikeClick(data:number){
  if(this.selectedDetails){
    this.onLikePost.emit(this.selectedDetails);
  }
  }

}
