import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  constructor() { }

  ngOnInit() {
  }

  onLoveIts(){
    this.loveIts ++;
    console.log(this.loveIts);
  }

  onDontLoveIts(){
    this.loveIts --;
    console.log(this.loveIts);
  }

}
