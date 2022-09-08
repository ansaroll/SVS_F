import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService , private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (this.authService.isLogged()) {
        return this.authService.isLogged()
      // }
    // return this.authService.isLogged()
    // if(this.authService.isLogged()){    
    //   console.log(this.authService.isLogged().);        
    //   return true 
    // }else{
    //   console.log(this.authService.isLogged());
      
      // return this.router.navigate(['auth'])
    // }
    // return this.authService.isLogged();
  }

}

