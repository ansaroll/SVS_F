import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ICredentials } from 'src/app/_interfaces/credentials';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() userLogin:ICredentials = {
    email:'',
    password:''
  }

  constructor(private router: Router,
              private authService : AuthService) { }

  ngOnInit(): void { }

  onLogin(){
    console.log(this.userLogin);

    this.authService.login(this.userLogin)
                    .subscribe((res) => {
                      // console.log('res' , res);                      
                      this.router.navigateByUrl('/admin')
                    })
    // this.router.navigateByUrl('/admin')
    // or
    // this.router.navigateByUrl('/ent/doctorants')
    // or
    // this.router.navigateByUrl('/ent/prof')

  }

}
