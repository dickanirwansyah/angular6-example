import {Injectable} from '@angular/core';
import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    Router, 
    RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {AuthProtected} from './auth.protected';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private router:Router,
        private authProtected:AuthProtected
    ){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> {
        return this.authProtected.isLoggedIn
          .pipe(
            take(1),                              
            map((isLoggedIn: boolean) => {         
              if (!isLoggedIn){
                this.router.navigate(['/login-influencer']);  
                return false;
              }
              return true;
            })
          )
    }
}