import {Component, OnInit} from '@angular/core';
import {InfluencerService} from '../service/influencer.service';
import {InfluencerLogin} from '../model/influencer.login';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import { Influencer } from '../model/influencer';


@Component({
    selector: 'app-influencer-login',
    templateUrl: './app.component.login.influencer.html'
})
export class AppComponentLoginInfluencer implements OnInit{

    private loggedIn = new BehaviorSubject<boolean>(false);
    private loginData = new InfluencerLogin;
    private loginError = new InfluencerLogin;
    private getDataLogin = {
        email: null,
        password: null
    }

    /**influencer */
    influencer = {
        "email" : "",
        "password" : "",
        "loginAs" : "INFLUENCER"
    }

    isLogin: boolean = true;

    constructor(
        private influencerService:InfluencerService,
        private router:Router
    ){}

    ngOnInit(){
        //this.isAuthenticated();
        //this.isAuthenticated();
    }

    /** 
    isAuthenticated(){
        if(!Cookie.check('access_token')){
            location.href="/login-influencer"
        }
    }
    **/

    /** another service 
    login(){
        var expireToken = new Date().getTime() + (10 * 60 * 1000);
        this.influencerService.loginInfluencer(this.loginData)
            .subscribe(data => {
                var dataLogin = [
                    this.loginData.email,
                    this.loginData.password
                ];

                localStorage.setItem('data_login', JSON.stringify(dataLogin));
                Cookie.set('access_token', JSON.stringify(dataLogin), expireToken);
                console.log(data);
                this.loginData = new InfluencerLogin();
                this.isLogin = true;
                this.loggedIn.next(true);
                location.href='/home';
            }, error => {
                this.loginError = error.error;
                this.isLogin = false;
                this.loggedIn.next(false);
                console.log(error);
            })
    }
    **/

    /**try login influencer example-vm**/
    login(){
        //var token = 123;
        var expireToken = new Date().getTime() + (10 * 60 * 1000);
        this.influencerService.influencerLogin(this.loginData)
            .subscribe(data => {
                
                //var dataLogin = [];  
                var dataInfluencer = [];
                var dataLogin = [
                    this.loginData.email,
                    this.loginData.password
                ];

                Cookie.set('access_token', JSON.stringify(dataLogin), expireToken);
                /**get data influencer */
                this.influencerService.influencerDataByEmails(this.loginData.email)
                .subscribe((datas:Object[]) => dataInfluencer = datas, error => console.log(error),
                    () => {
                        localStorage.setItem('_INFLUENCER', JSON.stringify(dataInfluencer))
                        console.log(JSON.stringify(dataInfluencer));
                    })
                /**get data influencer */


                localStorage.setItem('data_login', JSON.stringify(dataLogin));
                console.log(data);
                this.loginData = new InfluencerLogin();
                this.isLogin = true;
                location.href='/home';
            }, error => {
                this.loginError = error.error;
                this.isLogin = false;
                console.log(error);
        })
    }

    logins(loginDatas:Influencer){
        var loginData:any;
        var influencerData: Influencer;
        var expireToken = new Date().getTime() + (10 * 60 * 1000);

        this.influencerService.influencerLoginWithAny(loginDatas)
            .subscribe((data) => loginData = data, error => this.loginError = error.error),
            () => {
                var dataInfluencer = [];
                Cookie.set('access_token', JSON.stringify(loginData), expireToken);
                this.influencerService.influencerDataByEmails(loginDatas.requestEmail)
                .subscribe((data:Object[]) => dataInfluencer = data, error => console.log(error),
                    () => {
                        localStorage.setItem('_INFLUENCER', JSON.stringify(dataInfluencer))
                        location.href="/home"
                    })
            }
    }

}