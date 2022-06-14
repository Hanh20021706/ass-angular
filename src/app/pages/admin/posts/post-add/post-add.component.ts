import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryPost } from 'src/app/models/CategoryPosts';
import { IPost } from 'src/app/models/Post';
import { CategoryPostService } from 'src/app/services/category-post.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
    @Output() onAdd = new EventEmitter();
    post:IPost={
        title:'',
        image:'',
        shortDesc:'',
        desc:'',
        categoryPostId: 0,
        createAt:''
      }
    categoryPost!: ICategoryPost[];
  constructor(
    private postServices :PostService,
    private router: Router,
    private route : ActivatedRoute,
    private cate : CategoryPostService
  ) {}

  ngOnInit(): void {


    //  category
    this.cate.getcategoriesPosts().subscribe(res => {
      console.log(res)
      this.categoryPost = res
    })

    // edit
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
        this.postServices.getPost(id).subscribe((data) => {
            this.post = data
        })
    }
  }

  onSubmit(){
    // edit
    const id = + this.route.snapshot.paramMap.get('id')!;
    if(id){
        this.postServices.updatePost(this.post).subscribe(data=> {
            setTimeout(() => {
                this.router.navigateByUrl('/admin/posts')
            }, 1000)
        })
    }

    // create
    //doan nay convert tu string sang number
    this.postServices.createPost({...this.post, categoryPostId: +this.post.categoryPostId}).subscribe(data => {
      console.log(data)
        setTimeout(() => {
            this.router.navigateByUrl('/admin/posts')
        }, 1000)
    })
    // console.log(this.post)
  }
}
