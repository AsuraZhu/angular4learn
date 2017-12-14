import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import {
  HttpInterceptor,
  HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor( private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
   | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    console.log('intercept');
    const header = new HttpHeaders({
      'xx-Device-Type': 'web',
      'xx-Token': 'ec41dcf6bbc8e90a8041be0a46ee4ca8710376672d4588ca49d21f75ea1e5d34'
    });
    const jwtReq = req.clone({
      headers: header,
    });
   // return Observable.create((ob))
    return next.handle(jwtReq)
               .catch((res: HttpResponse<any>) => {
                if (res.status === 401) {
                  console.log(401);   // 判断是否 401 退出登录跳转到 登录页面
                  console.log(this.router);
                }
                return Observable.throw(res);
               });
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
