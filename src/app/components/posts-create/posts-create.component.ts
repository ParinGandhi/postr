import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.less']
})
export class PostsCreateComponent implements OnInit {
  newPost = "";
  enteredValue = "";

  onAddPost() {
    this.newPost = this.enteredValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
