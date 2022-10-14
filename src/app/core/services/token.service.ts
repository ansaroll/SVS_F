import { Injectable } from '@angular/core';
import { IToken } from 'src/app/_interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken = (token:IToken):void  => {
    localStorage.setItem('accessToken' , token.accessToken)
    localStorage.setItem('refreshToken' , token.refreshToken)
    localStorage.setItem('userIdConnected' , token.userIdConneted)
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
}
