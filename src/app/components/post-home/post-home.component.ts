import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  postList!: IPost[];


  constructor(private postServices: PostService) { 
    this.showUser();
  }

  ngOnInit(): void {
  }


  showUser(){
    this.postServices.getPosts().subscribe((data) => {
      this.postList = data
    })
  }

}
