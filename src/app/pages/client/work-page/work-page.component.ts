import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {

  workList!: IProject[];

  constructor(private workServices: ProjectService) {
    this.showPosts();
  }

  ngOnInit(): void {

  }

  showPosts(){
    this.workServices.getprojects().subscribe((data) => {
        this.workList = data
    })
  }

}
