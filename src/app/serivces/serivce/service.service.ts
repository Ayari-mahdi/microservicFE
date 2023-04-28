import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAll():Observable<[]>{
    return this.http.get<[]>(environment.apiHost+environment.getallservices)
   }
   getservice(userid:any):Observable<[]>{
     return this.http.get<[]>(environment.apiHost+environment.getservice+userid)
    }
   addservice(service: any ):Observable<any>{
     return this.http.post<any>(environment.apiHost+environment.addservice,service)
    }
    delete(serviceid: any):Observable<[]>{
     return this.http.delete<[]>(environment.apiHost+environment.deleteservice+serviceid)
    }
}
