import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userId: string | null = null
  role: string | null = null

  filetoUp!: File

  percentDone: number = 0;
  uploadSuccess: boolean = false;
  isImageSaved: boolean = false;
  cardImageBase64: string | undefined = undefined;
  user: User = {}

  fileName = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) { }


  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    })
  };


  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    this.userService.getSingleUser(this.userId).subscribe(
      {
        next: data => {
          this.user = data,
          this.cardImageBase64 = data.pictureUrl
        },
        error: error => { throw new Error(error) }
      }
    )
    this.role = this.route.snapshot.paramMap.get('role')
  }


  uploadImage(e: Event) {
    this.CreateBase64String(e)
  }


  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          this.userService.addPdpUser({
            userId:this.userId,
            file:imgBase64Path
          }).subscribe(
            {
            next: data => {console.log({data}) },
            error: error => { throw new Error(error) }
            }
          )
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
