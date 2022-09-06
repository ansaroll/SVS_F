import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() userLogin = {
    email:'',
    password:''
  }

  constructor(private router: Router,
              private authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.userLogin);

    this.authService.login(this.userLogin)
                    .subscribe((res) => {
                      // console.log(res)
                      this.router.navigateByUrl('/admin')
                    })
    // this.router.navigateByUrl('/admin')
    // or
    // this.router.navigateByUrl('/ent/doctorants')
    // or
    // this.router.navigateByUrl('/ent/prof')

  }

}
