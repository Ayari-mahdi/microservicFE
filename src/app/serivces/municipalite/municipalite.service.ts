import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipaliteService {

  
  constructor(private http:HttpClient) { }
  getAll():Observable<[]>{
    return this.http.get<[]>(environment.apiHost+environment.getallmunicip)
   }
   getmunicip(muicipid:any):Observable<[]>{
     return this.http.get<[]>(environment.apiHost+environment.getmunicip+muicipid)
    }
   addmunicip(service: any ):Observable<any>{
     return this.http.post<any>(environment.apiHost+environment.addmunicip,service)
    }
    delete(munid: any):Observable<[]>{
     return this.http.delete<[]>(environment.apiHost+environment.deleteMunicip+munid)
    }
    update(mun: any):Observable<[]>{
      return this.http.put<[]>(environment.apiHost+environment.updateMunicip,mun)
     }
     getcitbyname(name:any):Observable<[]>{
      return this.http.get<[]>(environment.apiHost+environment.getByNameMunicip+name)
     }
}
