import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryProject } from 'src/app/models/CategoryProject';
import { IProject } from 'src/app/models/Project';
import { CategoryProjectService } from 'src/app/services/category-project.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
	@Output() onAdd = new EventEmitter();
	project:IProject={
		name: '',
		image: '',
		shortDesc: '',
		desc: '',
		createAt: 0,
		categoryProjectId: 0
	}
	categoryProject!:ICategoryProject[];

  constructor(
		private projectServices :ProjectService,
		private router : Router,
		private route : ActivatedRoute,
		private cate :CategoryProjectService
  ) { }

  ngOnInit(): void {


	    //  category
		this.cate.getcategoriesProjects().subscribe(res => {
			console.log(res)
			this.categoryProject = res
		  })
	  

	// edit
	const id = + this.route.snapshot.paramMap.get('id')!;
	if(id){
		this.projectServices.getproject(id).subscribe((data) => {
			this.project = data
		})
	}
  }

  onSubmit(){

	const id = + this.route.snapshot.paramMap.get('id')!;
	if(id){
		this.projectServices.updateproject(this.project).subscribe(data => {
			setTimeout(() => {
				this.router.navigateByUrl('/admin/projects')
			},)
		})
	}


		this.projectServices.createproject({...this.project , categoryProjectId: +this.project.categoryProjectId}).subscribe(data => {
			setTimeout(() => {
				this.router.navigateByUrl('/admin/projects')
			}, 1000)
		}) 
  }

}
