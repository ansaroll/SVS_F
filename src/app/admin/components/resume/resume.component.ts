import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  user:Partial<User> = {}


  constructor(private route:ActivatedRoute , private userService:UserService,
              private location:Location) { }
id:string | null = null
ngOnInit(): void {
    this.fetch(this.route.snapshot.paramMap.get('id'))
    this.location.onUrlChange(()=>{
      // this.id = this.route.snapshot.paramMap.get('id')
      this.fetch(this.route.snapshot.paramMap.get('id'))
      console.log('id' , this.route.snapshot.paramMap.get('id') );

    })

  }

  fetch = (id:string | null) => {
    this.userService.getSingleUser(id).subscribe(
      {
        next:data => this.user = data,
        error:err => console.log({err})
      }
    )
  }

  ngOnDestroy = () => {
    this.fetch(this.route.snapshot.paramMap.get('id'))
  }

}
