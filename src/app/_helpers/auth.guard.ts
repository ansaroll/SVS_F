import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { TokenService } from '../core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router , private tokenService:TokenService) { }

  status:boolean = false

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.authService.isLogged().subscribe(data => this.status = data)

    if (this.tokenService.isLogged()) {
      return true
    }
    return this.router.navigate(['auth'])

  }

}

