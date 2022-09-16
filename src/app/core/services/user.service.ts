import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { User  } from '../../models/user.model'

@Injectable({
  providedIn:'root'
})
export class UserService {
  endpoint = 'http://localhost:1337'
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

  getSingleUser(id: any): Observable<Partial<User>> {
    return this.httpClient
      .get<Partial<User>>(this.endpoint + '/users/' + id)
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
      req.subscribe()
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
