import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponentLoginInfluencer} from './app.component.login.influencer';
import {AppLoginRoutingInfluencerModule} from './app.login.routing.influencer.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppLoginRoutingInfluencerModule
    ],
    declarations: [AppComponentLoginInfluencer]
})
export class AppLoginModule{}