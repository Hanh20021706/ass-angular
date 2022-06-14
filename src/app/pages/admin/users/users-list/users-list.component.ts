import { Component, OnInit } from '@angular/core';
import { IUer } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
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


  onRemoveUser(id : number){
    const confirm = window.confirm("Bạn có chắc muốn xóa ?");
    if(confirm){
        this.userServices.removeUser(id).subscribe(() => {
            this.userList = this.userList.filter((item) => item.id !==id)
        })
    }

  }

}
