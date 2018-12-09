import {Component, OnInit} from '@angular/core';
import {InfluencerService} from '../service/influencer.service';
import { Influencer } from '../model/influencer';

@Component({
    selector: 'app-influencer-register',
    templateUrl: './app.influencer.component.register.html'
})
export class AppInfluencerComponentRegister implements OnInit{

    private influencer=new Influencer();
    private influencerError=new Influencer();
    private isCreated:boolean=false;
    private isIfluencerIsExists:boolean=false;

    ngOnInit(){}

    constructor(
        private influencerService: InfluencerService
    ){}

    /**create new influencer */
    createInfluencer() {
        this.influencerService.createInfluencer(this.influencer)
            .subscribe(data => {
                console.log(data);
                this.influencer = new Influencer();
                this.isCreated=true;
                this.isIfluencerIsExists=false;
            }, error => {
                this.influencerError = error.error;
                this.isCreated = false;
                
                /** check conflict */
                if(error.status === 409){
                    this.isCreated = false;
                    this.isIfluencerIsExists = true;
                }
                console.log(error);
            })
      }
}


