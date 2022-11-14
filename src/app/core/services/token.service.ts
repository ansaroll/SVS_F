import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { IToken } from 'src/app/_interfaces/token';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  user:User={}

  constructor(
    private userService: UserService,
  ) { }

  saveToken = (token:IToken):void  => {
    localStorage.setItem('accessToken' , token.accessToken)
    localStorage.setItem('refreshToken' , token.refreshToken)
    localStorage.setItem('userIdConnected' , token.userIdConneted)
    this.userService.getSingleUser(token.userIdConneted).subscribe({
      next:user => {
        localStorage.setItem('nameConnected' , (user.firstName || "" + user.name) || 'Doctorant')
      }
    })
  }

  isLogged = () : boolean => {
    const accessToken = localStorage.getItem('accessToken')
    return !!accessToken
  }

  clearToken = () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('userIdConnected')

      window.location.reload()
  }

  getToken = () : string | null => {
    return localStorage.getItem('accessToken')
  }

  getUserIdConnected = () : string | null => {
    return localStorage.getItem('userIdConnected')
  }

  getUserNameConnected = () : string | null => {
    return localStorage.getItem('nameConnected')
  }
}
