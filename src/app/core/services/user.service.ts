import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { User , TPayloadPdp } from '../../models/user.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class UserService {
  endpoint = environment.apiUrl
  constructor(private httpClient:HttpClient) {}

httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getUsers():Observable<Partial<User>[]> {
    return this.httpClient.get<Partial<User>[]>(this.endpoint+'/api/users')
    .pipe(retry(1), catchError(this.processError));
  }

  getSingleUser(id: string | null): Observable<Partial<User>> {
    return this.httpClient
      .get<Partial<User>>(this.endpoint + '/api/user/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addUser(data: Partial<User>): Observable<Partial<User>> {
    const req = this.httpClient
      .post<Partial<User>>(
        this.endpoint + '/api/users',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
      return req
  }

  addPdpUser(data:TPayloadPdp): Observable<Partial<TPayloadPdp>>{
    const req = this.httpClient
      .post<Partial<TPayloadPdp>>(
        this.endpoint + '/api/user/pdp',
        JSON.stringify(data),
        this.httpHeader
      )
      return req
  }

  updateUser(id: any, data: any): Observable<Partial<User>> {
    return this.httpClient
      .put<Partial<User>>(
        this.endpoint + '/users/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteUser(id: any) {
    return this.httpClient
      .delete<Partial<User>>(this.endpoint + '/users/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
