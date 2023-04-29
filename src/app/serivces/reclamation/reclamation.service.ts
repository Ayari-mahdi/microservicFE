import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  getAll():Observable<[]>{
    return this.http.get<[]>(environment.apiHostrec+environment.reclamation)
   }
   getreclamation(recid:any):Observable<[]>{
     return this.http.get<[]>(environment.apiHostrec+environment.reclamation+recid)
    }
   addReclamation(rec: any ):Observable<any>{
     return this.http.post<any>(environment.apiHostrec+environment.reclamation,rec)
    }
    delete(recid: any):Observable<[]>{
     return this.http.delete<[]>(environment.apiHostrec+environment.reclamation+recid)
    }
    update(id:any ,rec: any):Observable<[]>{
      return this.http.put<[]>(environment.apiHostrec+environment.reclamation+id,rec)
     }
}
