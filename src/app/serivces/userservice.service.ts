import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user, userauth } from '../Models/models';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
user!:user;
/*authlink= "http://localhost:8089/user/authenticate";
reglink="http://localhost:8089/user/registrate";
deletelink="http://localhost:8089/user/delete/";
getall="http://localhost:8089/user/AllUsers";
getuser="http://localhost:8089/user/";
newpwdlink="http://localhost:8089/user/newpassword/";
updatelink="http://localhost:8089/user/update";*/

  constructor(private http:HttpClient) { }
  logOut()
 {
   sessionStorage.removeItem("token");
   sessionStorage.removeItem("user");
 }
  getAll():Observable<[]>{
   return this.http.get<[]>(environment.apiHost+environment.getallusers)
  }
  getUser(userid:any):Observable<[]>{
    return this.http.get<[]>(environment.apiHost+environment.getuser+userid)
   }
  auth(user: any ):Observable<any>{
    return this.http.post<any>(environment.apiHost+environment.authuser,user)
    .pipe(map(userdata =>{
      console.log(userdata.tokken)
      sessionStorage.setItem("token",JSON.stringify(userdata.tokken));
      sessionStorage.setItem("user",JSON.stringify(userdata.user));
      this.user=userdata.user;
     return this.user 
    }))
   }
   delete(userid: any):Observable<[]>{
    return this.http.delete<[]>(environment.apiHost+environment.deleteuser+userid)
   }
   update(user : any):Observable<[]>{
    return this.http.put<[]>(environment.apiHost+environment.updateuser,user)
   }

   reg(user : any):Observable<[]>{
    return this.http.post<[]>(environment.apiHost+environment.reguser,user)
   }
   newpwd(userid:any,password:string):Observable<[]>{
    return this.http.post<[]>(environment.apiHost+environment.newpwdlink+userid,password)
   }
}
