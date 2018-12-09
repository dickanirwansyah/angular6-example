import {Injectable} from "@angular/core";
import {Influencer} from '../model/influencer';
import {InfluencerLogin} from '../model/influencer.login';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Observable, from } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class InfluencerService {

    private uri:string = "http://localhost:8080";
    private httpUri:string = "http://localhost:8080/";
    private httpHeader={headers: new HttpHeaders({'Content-type' : 'application/json'})};

    /**service punya example-vm */
    private loginInfluencerUri:string = "http://localhost:8080/api/influencer/login";
    private influencerDataByParamsEmail = "http://localhost:8080/api/influencer/params"
    /**service punya example-vm */

    constructor(
        private http:HttpClient,
        private _http:Http
    ){}

    createInfluencer(influencer:Influencer){
        return this.http.post(this.uri+"/influencer/login",influencer, this.httpHeader)
    }

    loginInfluencer(loginData: InfluencerLogin){
        return this.http.post(this.uri+"/influencer/login", loginData, this.httpHeader)
    }

    /**login influencer example-vm */
    influencerLogin(loginData: InfluencerLogin){
        return this.http.post(this.loginInfluencerUri, loginData, this.httpHeader);
    }

    influencerLoginWithAny(loginDatas:any):Observable<Object>{
        return this._http.post(this.loginInfluencerUri, loginDatas)
        .pipe(map(res => res.json()));
    }

    /**get data influencer by params email */
    influencerDataByEmails(email:any): Observable<Object[]>{
        return this._http.get(this.influencerDataByParamsEmail+'?email='+email)
        .pipe(map(res => res.json()));
    }
}