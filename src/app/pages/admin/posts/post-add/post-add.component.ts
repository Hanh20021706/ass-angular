import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/Post';
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
        desc:''
    }
  constructor(
    private postServices :PostService,
    private router: Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
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
    this.postServices.createPost(this.post).subscribe(data => {
        setTimeout(() => {
            this.router.navigateByUrl('/admin/posts')
        }, 1000)
    })
  }
}
