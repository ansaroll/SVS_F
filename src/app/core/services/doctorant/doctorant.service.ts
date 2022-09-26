import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Doctorant } from 'src/app/models/doctorant/doctorant.model'

@Injectable({
  providedIn:'root'
})
export class DoctorantService {
  endpoint = 'http://localhost:1337'
  constructor(private httpClient:HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getDoctorants():Observable<Partial<Doctorant>[]> {
    return this.httpClient.get<Partial<Doctorant>[]>(this.endpoint+'/api/doctorants')
    .pipe(retry(1), catchError(this.processError));
  }

  getSingleDoctorant(id: string | null): Observable<Partial<Doctorant>> {
    console.log({id});

    return this.httpClient
      .get<Partial<Doctorant>>(this.endpoint + '/api/Doctorant/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addDoctorant(data: Partial<Doctorant>): Observable<Partial<Doctorant>> {
    const req = this.httpClient
      .post<Partial<Doctorant>>(
        this.endpoint + '/api/doctorants',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
      req.subscribe()
      return req
  }
  updateDoctorant(id: any, data: any): Observable<Partial<Doctorant>> {
    return this.httpClient
      .put<Partial<Doctorant>>(
        this.endpoint + '/Doctorants/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteDoctorant(id: any) {
    return this.httpClient
      .delete<Partial<Doctorant>>(this.endpoint + '/Doctorants/' + id, this.httpHeader)
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
