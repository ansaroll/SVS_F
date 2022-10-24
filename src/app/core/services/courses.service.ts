import { Injectable } from '@angular/core'
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Courses } from '../../models/courses.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class CoursesService {
  endpoint = environment.apiUrl
  constructor(private httpClient:HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  getCoursess(data:{coursesId?:string,enabled?:boolean}):Observable<Partial<Courses>[]> {
    return this.httpClient.get<Partial<Courses>[]>(this.endpoint+'/api/courses', {params:data} )
    .pipe(retry(1), catchError(this.processError));
  }

  getSingleCourses(id: string | null): Observable<Partial<Courses>> {
    return this.httpClient
      .get<Partial<Courses>>(this.endpoint + '/api/courses/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addCourses(data: Partial<Courses>): Observable<Partial<Courses>> {
    const req = this.httpClient
      .post<Partial<Courses>>(
        this.endpoint + '/api/courses',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
      return req
  }

  updateCourses(data: any): Observable<Partial<Courses>> {
    return this.httpClient
      .put<Partial<Courses>>(
        this.endpoint + '/api/courses/' + data._id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteCourses(id: any) {
    return this.httpClient
      .delete<Partial<Courses>>(this.endpoint + '/courses/' + id, this.httpHeader)
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
