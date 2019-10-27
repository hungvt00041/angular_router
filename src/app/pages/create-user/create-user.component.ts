import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../user-service.service'
import {User} from '../../user.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(public userService:UserServiceService, public router:Router) { }
  user:User= new User;

  onSubmit(){
    this.userService.create(this.user).subscribe(
      (result:string)=>{this.router.navigateByUrl("/users");})

  }

}
