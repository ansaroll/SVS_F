import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getUsers({role:'doctorant'}).subscribe({next:data => console.log({data}) , error: err => console.log({err})})
  }

}
