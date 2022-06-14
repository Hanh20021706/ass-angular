import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogList!: IPost[];

  constructor(private blogServices: PostService) {
    this.showPosts();
  }

  ngOnInit(): void {

  }

  showPosts(){
    this.blogServices.getPosts().subscribe((data) => {
        this.blogList = data
    })
  }

}
