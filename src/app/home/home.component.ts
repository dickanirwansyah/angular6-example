import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.checkTokenInCookies();
  }

  checkTokenInCookies(){
    if(!Cookie.check('access_token')){
        //location.href='/login';
        this.router.navigate(['/login-influencer'])
    }
}
  
}
