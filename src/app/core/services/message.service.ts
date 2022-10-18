import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Message } from '../../models/message.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class MessageService {
  endpoint = environment.apiUrl
  constructor(private httpClient:HttpClient) {}

httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getMessages() {
    return this.httpClient.get<Partial<Message>[]>(
      this.endpoint+'/api/messages')
    .pipe(retry(1), catchError(this.processError));
  }

  getSingleMessage(id: string | null): Observable<Partial<Message>> {
    return this.httpClient
      .get<Partial<Message>>(this.endpoint + '/api/message/' + id)
      .pipe(retry(1), catchError(this.processError));
  }

  addMessage(data: Partial<Message>): Observable<Partial<Message>> {
    const req = this.httpClient
      .post<Partial<Message>>(
        this.endpoint + '/api/message',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
      return req
  }

  // addPdpMessage(data:TPayloadPdp): Observable<Partial<TPayloadPdp>>{
  //   const req = this.httpClient
  //     .post<Partial<TPayloadPdp>>(
  //       this.endpoint + '/api/message/pdp',
  //       JSON.stringify(data),
  //       this.httpHeader
  //     )
  //     return req
  // }

  updateMessage(id: any, data: any): Observable<Partial<Message>> {
    return this.httpClient
      .put<Partial<Message>>(
        this.endpoint + '/api/message/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  deleteMessage(id: any) {
    return this.httpClient
      .delete<Partial<Message>>(this.endpoint + '/api/message/' + id, this.httpHeader)
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
