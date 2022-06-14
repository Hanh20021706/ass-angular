import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-project-add',
  templateUrl: './category-project-add.component.html',
  styleUrls: ['./category-project-add.component.css']
})
export class CategoryProjectAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  categoryProject: ICategoryProject={
    name: ''
  }

  constructor(
    private categoryPrjoectServices :CategoryProjectService,
    private router :Router,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
      // edit
      const id = +this.route.snapshot.paramMap.get('id')!;
      if(id){
          this.categoryPrjoectServices.getcategoryProject(id).subscribe((data) => {
              this.categoryProject = data
          })
      }
  }



  onSubmit(){
     // edit 
     const id = + this.route.snapshot.paramMap.get('id')!;
     if(id){
       this.categoryPrjoectServices.updatecategoryProject(this.categoryProject).subscribe(data=> {
           setTimeout(() => {
               this.router.navigateByUrl('/admin/categories/projects')
           }, 1000)
       })
   }
 
   // create
   this.categoryPrjoectServices.createcategoryProject(this.categoryProject).subscribe(data => {
       setTimeout(() => {
           this.router.navigateByUrl('/admin/categories/projects')
       }, 1000)
   })
 }
  }


