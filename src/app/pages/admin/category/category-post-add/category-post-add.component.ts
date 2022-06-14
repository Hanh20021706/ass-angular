import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryPost } from 'src/app/models/CategoryPosts';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-post-add',
  templateUrl: './category-post-add.component.html',
  styleUrls: ['./category-post-add.component.css']
})
export class CategoryPostAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  categoryPost: ICategoryPost={
    name:''
  }

  constructor(
    private categoryPostServices : CategoryPostService,
    private router :Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
        // edit
        const id = +this.route.snapshot.paramMap.get('id')!;
        if(id){
            this.categoryPostServices.getcategoryPost(id).subscribe((data) => {
                this.categoryPost = data
            })
        }
  }

  onSubmit(){

    // edit 
    const id = + this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.categoryPostServices.updatecategoryPost(this.categoryPost).subscribe(data=> {
          setTimeout(() => {
              this.router.navigateByUrl('/admin/categories/posts')
          }, 1000)
      })
  }

  // create
  this.categoryPostServices.createcategoryPost(this.categoryPost).subscribe(data => {
      setTimeout(() => {
          this.router.navigateByUrl('/admin/categories/posts')
      }, 1000)
  })
}

  }


