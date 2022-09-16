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
}
