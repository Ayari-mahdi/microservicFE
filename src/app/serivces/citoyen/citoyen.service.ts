import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  constructor(private http:HttpClient) { }
  getAll():Observable<[]>{
    return this.http.get<[]>(environment.apiHost+environment.getallcitoyen)
   }
   getcitoyen(ciotyenid:any):Observable<[]>{
     return this.http.get<[]>(environment.apiHost+environment.getcitoyen+ciotyenid)
    }
    getcitoyenbycin(cin:any):Observable<[]>{
      return this.http.get<[]>(environment.apiHost+environment.getcitoyenbycin+cin)
     }
   addcitoyen(citoyen: any ):Observable<any>{
     return this.http.post<any>(environment.apiHost+environment.addcitoyen,citoyen)
    }
    delete(citoyenid: any):Observable<[]>{
     return this.http.delete<[]>(environment.apiHost+environment.removecitoyen+citoyenid)
    }
    update(citoyen : any):Observable<[]>{
     return this.http.put<[]>(environment.apiHost+environment.updatecitoyen,citoyen)
    }
}
