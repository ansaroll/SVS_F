import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../core/services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken()
    if(token){
      let cloneRequest = request.clone({
        headers:request.headers.set("Authorization" , "Bearer "+token)
      })
      return next.handle(cloneRequest).pipe(
        catchError(error => {
          console.log({error})
          if(error.status === 403){
            this.tokenService.clearToken()
          }
          return throwError("Session expired")
        })
      )
    }
    return next.handle(request);
  }
}

// Injectable autonome , tous le temps actif en entre et en sortie : intercepteur ,
// injectee au app.module pour etre actif dans tous les modules
export const TokenInterceptorProvider = {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
}
