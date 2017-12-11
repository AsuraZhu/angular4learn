import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import {
  HttpInterceptor,
  HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private notifySrv: string) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
   | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    console.log('intercept');
    const jwtReq = req.clone({
      headers: req.headers.set('token', 'asd')
    });
    return next.handle(jwtReq)
               .mergeMap((event: any) => {
                  if (event instanceof HttpResponse && event.body.code !== 0) {
                    return Observable.create(observer => observer.error(event));
                  }
                  return Observable.create(observer => observer.next(event));
               })
               .catch((res: HttpResponse<any>) => {
                 switch (res.status) {
                    case 401:
                        console.log('401错误');
                        break;
                    case 404:
                        console.log('404错误');
                        break;
                 }
                 return Observable.throw(res);
               });
    // throw new Error('Method not implemented.');
  }
}
