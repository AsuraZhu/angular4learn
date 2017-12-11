import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import {
  HttpInterceptor,
  HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
   | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    console.log('intercept');
    const jwtReq = req.clone({
      headers: req.headers.set('token', 'asd')
    });
   // return Observable.create((ob))
    return next.handle(jwtReq);
              //  .mergeMap((event: any) => {
              //    console.log('zzz');
              //     // if (event instanceof HttpResponse) {
              //     //   return Observable.create(observer => observer.error(event));
              //     // }
              //     // Observable.create(observer => observer.next(event))
              //     return Observable.create(observer => observer.next(event));
              //  })
              //  .catch((res: HttpResponse<any>) => {
              //    console.log('错误', res);
              //    switch (res.status) {
              //       case 401:
              //           console.log('401错误');
              //           break;
              //       case 404:
              //           console.log('404错误');
              //           break;
              //    }
              //    return Observable.throw(res.body);
              //  });
    // throw new Error('Method not implemented.');
  }
}
