import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  User:Partial<User> = {}

  @Input() userObj = { name:'' , email:'' , password:'', passwordConfirmation:''}

  constructor(
    public userService:UserService ,
    public router: Router
    ) { }

  ngOnInit(): void {}

  addUser(data:any) {
    console.log(this.userObj);
    this.userService.addUser(this.userObj)
  }

}
