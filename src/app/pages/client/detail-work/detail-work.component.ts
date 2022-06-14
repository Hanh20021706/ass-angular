import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.css']
})
export class DetailWorkComponent implements OnInit {

  workDetail!:IProject;

  constructor(

    private router: ActivatedRoute,
    private workServices : ProjectService
  ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.workServices.getproject(+id).subscribe(data => {
      this.workDetail = data
    })
  }
  ngOnInit(): void {
  }

}
