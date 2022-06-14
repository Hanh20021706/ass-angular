import { Component, OnInit } from '@angular/core';
import { ICategoryPost } from 'src/app/models/CategoryPosts';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-post-list',
  templateUrl: './category-post-list.component.html',
  styleUrls: ['./category-post-list.component.css']
})
export class CategoryPostListComponent implements OnInit {
    categoryListPost!: ICategoryPost[];

  constructor(private categoriesServices : CategoryPostService) { 
    this.showCategories();
  }

  ngOnInit(): void {
  }

  showCategories(){
        this.categoriesServices.getcategoriesPosts().subscribe((data) => {
            this.categoryListPost = data
        })
  }

  onRemoveCate(id: number){
    const confirm = window.confirm("bạn có chắc chắn xóa?");
    if(confirm){
        this.categoriesServices.removecategoryPost(id).subscribe(() => {
            this.categoryListPost = this.categoryListPost.filter((item) => item.id !== id)
        })
    }

  }

}
