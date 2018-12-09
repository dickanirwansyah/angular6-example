import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponentLoginInfluencer} from '../+login/app.component.login.influencer';

const routes: Routes = [
    {
        path: '',
        component: AppComponentLoginInfluencer
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLoginRoutingInfluencerModule{}