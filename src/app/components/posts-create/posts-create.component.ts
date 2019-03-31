import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.less']
})
export class PostsCreateComponent implements OnInit {
  newPost = "";

  onAddPost() {
    this.newPost = "The user's new post.";
  }

  constructor() { }

  ngOnInit() {
  }

}
