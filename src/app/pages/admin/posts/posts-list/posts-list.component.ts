import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  postList!: IPost[];

  constructor(private postsServices: PostService) {
    this.showPosts();
  }

  ngOnInit(): void {}

  showPosts(){
    this.postsServices.getPosts().subscribe((data) => {
        this.postList = data
    })
  }


  onRemovePost(id:number){
    const confirm = window.confirm("Bạn có chắc muốn xóa ?");
    if(confirm){
        this.postsServices.removePost(id).subscribe(() => {
            this.postList = this.postList.filter((item) => item.id !==id)
        })
    }
  }
}
