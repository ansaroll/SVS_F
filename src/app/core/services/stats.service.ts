import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class StatsService {
  endpoint = environment.apiUrl
  constructor(private httpClient:HttpClient) {}

httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getStats() {
    return this.httpClient.get<{coursesCount:number,  doctorantCount:number,  profCount:number,  staffCount:number, advertCount:number}>(
      this.endpoint+'/api/stats')
    .pipe(retry(1), catchError(this.processError));
  }

  getStatsMessages() {
    return this.httpClient.get<{fileCount:number,doctorantMessages:number,adminMessages:number}>(
      this.endpoint+'/api/stats/messages')
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
