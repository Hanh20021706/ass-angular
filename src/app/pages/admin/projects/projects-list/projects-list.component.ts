import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
    projectList!:IProject[];

  constructor(private projectsServices : ProjectService) { 
    this.showProjects();
  }

  ngOnInit(): void {
  }
  showProjects(){
        this.projectsServices.getprojects().subscribe((data) => {
            this.projectList = data
        })
  }

  onRemoveProject(id: number){
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa ?");
    if(confirm){
        this.projectsServices.removeproject(id).subscribe(() => {
            this.projectList = this.projectList.filter((item) => item.id !== id)
        })
    }
  }

    

}
