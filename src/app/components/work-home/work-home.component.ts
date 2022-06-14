import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work-home',
  templateUrl: './work-home.component.html',
  styleUrls: ['./work-home.component.css']
})
export class WorkHomeComponent implements OnInit {

  workList!: IProject[];


  constructor(private workServices: ProjectService) { 
    this.showUser();
  }

  ngOnInit(): void {
  }


  showUser(){
    this.workServices.getprojects().subscribe((data) => {
      this.workList = data
    })
  }


}
