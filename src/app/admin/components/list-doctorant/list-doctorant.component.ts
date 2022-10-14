import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-doctorant',
  templateUrl: './list-doctorant.component.html',
  styleUrls: ['./list-doctorant.component.scss']
})
export class ListDoctorantComponent implements OnInit {

  constructor(private userService:UserService,
              private router:Router) {}

  users:Partial<User>[] = []
  currentUser:Partial<User> = {}

  ngOnInit(): void {
    this.userService.getUsers({role:'doctorant'}).subscribe({next:data => {
      this.users = data
      this.currentUser = data[0]
    } , error: err => console.log({err})})
  }

  onViewUser = (user:Partial<User>) => {
    this.currentUser = user
  }


}

