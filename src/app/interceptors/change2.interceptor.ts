import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Change2Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let API_KEY="API123";
    let ROLE_KEY="ROLE123";
    return next.handle(request.clone({setHeaders:{API_KEY,ROLE_KEY}}))
    return next.handle(request);
  }
}
