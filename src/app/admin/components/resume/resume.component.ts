import { Component, OnInit, OnDestroy , Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {

  @Input() user:Partial<User> = {}
  @Output() userDeleted: EventEmitter<number> =   new EventEmitter();

  openDialogConfirm:boolean = false
  userToDelete?:string = undefined

  constructor(private route:ActivatedRoute ,
              private userService:UserService,
              private router:Router,
              private location:Location) { }

id:string | null = null
ngOnInit(): void {}

  deleteUser = () => {
    this.openDialogConfirm = false
    this.userService.deleteUser(this.userToDelete).subscribe(
      {
        next:() => this.userDeleted.emit() ,
        error:err => console.log({err})
      }
    )
  }

  cancelDelete = () => {
    this.openDialogConfirm = false
    this.userToDelete = undefined
  }

  onViewDetailUser = (idUser?:string, role?:string) => {
    this.router.navigateByUrl(`/admin/profil/${idUser}/${role}`)
  }

  onViewDeleteUser = (idUser?:string) => {
    this.openDialogConfirm = true
    this.userToDelete = idUser
  }

  ngOnDestroy = () => {
    // this.fetch(this.route.snapshot.paramMap.get('id'))
  }

}
