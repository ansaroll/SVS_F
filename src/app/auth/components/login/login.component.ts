import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
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

  unAuthorized:boolean = false

  constructor(private router: Router,
              private authService : AuthService,
              private tokenService: TokenService) { }

  ngOnInit(): void { }

  onLogin(){
    this.authService.login(this.userLogin)
                    .subscribe({
                      next: (data) => {
                        this.tokenService.saveToken(data)
                        if(data.role == 'admin'){
                          this.router.navigateByUrl('/admin')
                        }
                        // if(data.role == 'prof'){
                        //   this.router.navigateByUrl('/prof')
                        // }
                        if(data.role == 'doctorant'){
                          this.router.navigateByUrl('/doctorant')
                        }
                      },
                      error: (err) => {
                          this.unAuthorized = true
                      }
                    })
    // this.router.navigateByUrl('/admin')
    // or
    // this.router.navigateByUrl('/ent/doctorants')
    // or
    // this.router.navigateByUrl('/ent/prof')

  }

}
