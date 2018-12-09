import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
/** influencer login */
import {InfluencerLogin} from '../influencer/model/influencer.login';
import {InfluencerService} from '../influencer/service/influencer.service';

@Injectable()
export class AuthProtected{

    private loggedIn = new BehaviorSubject<boolean>(false); 

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor(
        private router:Router,
        private influencerService:InfluencerService
    ){}

    /** login influencer 
    loginInfluencer(influencerLogin: InfluencerLogin){
        if(influencerLogin.email !== '' && influencerLogin.password !== ''){
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
        }
    }
    **/

    /**logout influencer */
    logoutInfluencer(){
        this.loggedIn.next(false);
        this.router.navigate(['/login-influencer']);
    }

    /** login marketer */
}