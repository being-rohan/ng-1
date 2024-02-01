import { Component, OnInit } from '@angular/core';
import { posts } from '../const/const';
import { Ipost } from '../interface/interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post2: Array<Ipost> = posts
  constructor() { }

  ngOnInit(): void {
    console.log(this.post2)
  }

}
