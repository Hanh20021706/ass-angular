import { Component, OnInit } from '@angular/core';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-project-list',
  templateUrl: './category-project-list.component.html',
  styleUrls: ['./category-project-list.component.css'],
})
export class CategoryProjectListComponent implements OnInit {
  categoryListproject!: ICategoryProject[];

  constructor(private categoryProjectSevices: CategoryProjectService) {
    this.showCategoryProject();
  }

  ngOnInit(): void {}

  showCategoryProject() {
    this.categoryProjectSevices.getcategoriesProjects().subscribe((data) => {
      this.categoryListproject = data;
    });
  }

  onRemoveCate(id: number) {
    const confirm = window.confirm('bạn có chắc chắn xóa?');
    if (confirm) {
      this.categoryProjectSevices.removecategoryProject(id).subscribe(() => {
        this.categoryListproject = this.categoryListproject.filter(
          (item) => item.id !== id
        );
      });
    }
  }
}
