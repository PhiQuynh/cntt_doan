import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenUtils } from '../utils/token.utils';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const token = sessionStorage.getItem("access_token");
  //   if (token) {

  //     // decode JWT payload part.
  //     const payload = TokenUtils.parseJwt(token);

  //     // Check token exp.
  //     if (!payload || Date.now() >= payload.exp * 1000) {
  //       // Token expire remove it in sessionStorage
  //       sessionStorage.removeItem("access_token");
  //     } else {

  //       // If we have a token, we set it to the header
  //       request = this.addToken(request, token)
  //     }
  //   }
    
  //   request = this.addContentType(request, 'application/json');

  //   return next.handle(request).pipe(
  //     catchError((error) => {
  //       return throwError(() => new Error(error?.message));
  //     })
  //   );
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("access_token");
    if (token) {

      // decode JWT payload part.
      const payload = TokenUtils.parseJwt(token);

      // Check token exp.
      if (!payload || Date.now() >= payload.exp * 1000) {
        // Token expire remove it in sessionStorage
        sessionStorage.removeItem("access_token");
      } else {

        // If we have a token, we set it to the header
        request = this.addToken(request, token)
      }
    }
    
    request = this.addContentType(request, 'application/json');

    return next.handle(request).pipe(
      catchError((error) => {
        if(error.status === 500){        
          console.log(error);
          if(error.message.code == 'ER013' ||  error.message.code == 'ER014') {
            console.log("error: " , error);
            this.router.navigate(['/view'], { state: { messages: error.error.message.params } })
          }
          if(error.error.message.code == 'ER014'){
            this.router.navigate(['add/view'], { state: { messages: error.error.message}})
            
          }
          if(error.error.message.code == 'ER003' || error.error.message.code == 'ER004'|| error.error.message.code == 'ER018'|| error.error.message.code == 'ER001'|| error.error.message.code == 'ER006' || error.error.message.code == 'ER005') {
            this.router.navigate(['/user/add'], { state: { message: error.error.message.params } })
          }
          else {
            this.router.navigate(['/**'], { state: { message: error.error.message.params } })
          }
        }
        return throwError(() => new Error(error?.message));
      })
    );
  }
  

  private addContentType(request: HttpRequest<any>, contentType: string) {
    return request.clone({
      setHeaders: {
        'Content-Type': contentType,
      },
    });
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const TokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
};