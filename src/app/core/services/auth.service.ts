import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, retry, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  endpoint = 'http://localhost:1337'
  constructor(private httpClient: HttpClient) {
    const AToken = localStorage.getItem('accessToken')
    this._isLoggedIn$.next(!!AToken)
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  private token!: string;

  login(data:{email:string,password:string}):Observable<{accessToken:string , refreshToken:string}>{
    return this.httpClient.post<{accessToken:string , refreshToken:string}>(this.endpoint + '/api/sessions', JSON.stringify(data),this.httpHeader).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.accessToken)
        localStorage.setItem('refreshToken', response.refreshToken)
        this._isLoggedIn$.next(true)
      })
    )
  }

  isLogged(){
    return this.isLoggedIn$
  }

  getToken() : string {
    return this.token;
  }

}
