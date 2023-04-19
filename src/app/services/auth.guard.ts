import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from 'src/app/serivces/userservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice:UserserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,//current route
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {//route attpemting to access
       if (this.router.url === '/') { // attpemting to write url manually 
        this.router.navigate(['']); // Navigate away to some other page
        return false;
      }
      return true
    
  }
  
}
