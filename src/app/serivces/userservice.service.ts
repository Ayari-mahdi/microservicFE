import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user, userauth } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
user!:user;
authlink= "http://localhost:8089/user/authenticate";
reglink="http://localhost:8089/user/registrate";
deletelink="http://localhost:8089/user/delete/";
getall="http://localhost:8089/user/allUsers";
getuser="http://localhost:8089/user/";
newpwdlink="http://localhost:8089/user/newpassword/";
updatelink="http://localhost:8089/user/update";

  constructor(private http:HttpClient) { }
  getAll():Observable<[]>{
   return this.http.get<[]>(this.getall)
  }
  getUser(userid:any):Observable<[]>{
    return this.http.get<[]>(this.getuser+userid)
   }
  auth(user: any ):Observable<any>{
    return this.http.post<any>(this.authlink,user)
    .pipe(map(userdata =>{
      console.log(userdata.tokken)
      sessionStorage.setItem("token",JSON.stringify(userdata.tokken));
      sessionStorage.setItem("user",JSON.stringify(userdata.user));
      this.user=userdata.user;
     return this.user 
    }))
   }
   delete(userid: any):Observable<[]>{
    return this.http.delete<[]>(this.deletelink+userid)
   }
   update(user : any):Observable<[]>{
    return this.http.put<[]>(this.updatelink,user)
   }

   reg(user : any):Observable<[]>{
    return this.http.post<[]>(this.reglink,user)
   }
   newpwd(userid:any,password:string):Observable<[]>{
    return this.http.post<[]>(this.newpwdlink+userid,password)
   }
}
