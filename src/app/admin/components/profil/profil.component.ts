import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

   userId:string | null = null
   role:string | null = null

   user:any = {}

  constructor(
    private route:ActivatedRoute , 
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    this.userService.getSingleUser(this.userId).subscribe(
      {
        next : data => {
          this.user = data
        },
        error : error => {throw new Error(error)}
      }
    )
    this.role = this.route.snapshot.paramMap.get('role')
  }

}
