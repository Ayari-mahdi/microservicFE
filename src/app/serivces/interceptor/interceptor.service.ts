import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
token=''
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("testint interceptor",req)
    const tok=localStorage.getItem("token")
     if(tok!==null){
     this.token=tok
    }
  
    /*const req2=req.clone({
         headers:req.headers.set('Authorization',this.token),
    })*/
    /* req=req.clone({
     setHeaders: {
      'Access-Control-Allow-Origin':'*'
    }
    })*/
    

    /*if(req.method==="POST"){
      
      req=req.clone({
        setHeaders: {
          'Accept': 'application/json, text/plain',
         'Access-Control-Allow-Origin':'*',
         'Content-Type': 'application/json',
       }
    })}*/
    console.log("testint interceptor",req)
    return next.handle(req)
  }
}
