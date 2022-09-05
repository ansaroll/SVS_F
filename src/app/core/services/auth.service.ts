import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  endpoint = 'http://localhost:1337'
  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };


  private token!: string;

  login(data:{email:string,password:string}):Observable<any>{
    console.log(data);
    const token = this.httpClient.post(this.endpoint + '/api/sessions', JSON.stringify(data),
    this.httpHeader
    )
    token.subscribe()
    // this.token = token.pipe()
    console.log({token});

    return token
  }

  getToken() : string {
    return this.token;
  }

}
