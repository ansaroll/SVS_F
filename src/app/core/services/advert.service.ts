import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Advert } from '../../models/advert.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class AdvertService {
  endpoint = environment.apiUrl
  constructor(private httpClient:HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getAdverts(data:{advertId?:string,enabled?:boolean}):Observable<Partial<Advert>[]> {
    return this.httpClient.get<Partial<Advert>[]>(this.endpoint+'/api/advert', {params:data} )
    .pipe(retry(1), catchError(this.processError));
  }

  getSingleAdvert(id: string | null): Observable<Partial<Advert>> {
    return this.httpClient
      .get<Partial<Advert>>(this.endpoint + '/api/advert/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addAdvert(data: Partial<Advert>): Observable<Partial<Advert>> {
    const req = this.httpClient
      .post<Partial<Advert>>(
        this.endpoint + '/api/advert',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
      return req
  }

  updateAdvert(data: any): Observable<Partial<Advert>> {
    return this.httpClient
      .put<Partial<Advert>>(
        this.endpoint + '/api/advert/' + data._id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  deleteAdvert(id: any) {
    return this.httpClient
      .delete<Partial<Advert>>(this.endpoint + '/api/advert/' + id, this.httpHeader)
      .pipe(catchError(this.processError));
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
