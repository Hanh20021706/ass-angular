import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUer } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  user:IUer={
    name: '',
    position: '',
    about: '',
    image:''
  }

  constructor(
    private userService :UsersService,
    private router :Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
      // edit
      const id = +this.route.snapshot.paramMap.get('id')!;
      if(id){
          this.userService.getUser(id).subscribe((data) => {
              this.user = data
          })
      }
  }

  onSubmit(){
        // edit
        const id = + this.route.snapshot.paramMap.get('id')!;
        if(id){
            this.userService.updatUser(this.user).subscribe(data=> {
                setTimeout(() => {
                    this.router.navigateByUrl('/admin/user')
                }, 1000)
            })
        }
    
        // create
        this.userService.createUser(this.user).subscribe(data => {
            setTimeout(() => {
                this.router.navigateByUrl('/admin/user')
            }, 1000)
        })
  }

}
