import {NgModule} from '@angular/core';
import {AppInfluencerComponentRegister} from '../+register/app.influencer.component.register';
import {AppInlfuencerRoutingModule} from '../+register/app.influencer.routing.module';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        AppInlfuencerRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [AppInfluencerComponentRegister]
})
export class AppInfluencerModule{

}