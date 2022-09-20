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
  }

  isLogged = () : boolean => {
    const accessToken = localStorage.getItem('accessToken')
    return !!accessToken
  }

  clearToken = () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      window.location.reload()
  }

  getToken = () : string | null => {
    return localStorage.getItem('accessToken')
  }
}
