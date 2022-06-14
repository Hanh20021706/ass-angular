import { Component, OnInit } from '@angular/core';
import { IUer } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userList!: IUer[];


  constructor(private userServices: UsersService) { 
    this.showUser();
  }

  ngOnInit(): void {
  }


  showUser(){
    this.userServices.getUsers().subscribe((data) => {
      this.userList = data
    })
  }


}
