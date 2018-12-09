import {Component, OnInit} from '@angular/core';
import {Cookie} from 'ng2-cookies';
import { from } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './app.header.component.html'
})
export class AppHeaderComponent implements OnInit{

    ngOnInit(){
        this.checkCookies();
    }

    isLogin: boolean = false;

    /** check hak akses */
    checkCookies(){
        if(!Cookie.check('access_token')){
            this.isLogin = false;
        }else{
            this.isLogin = true;
        }
    }
    
}