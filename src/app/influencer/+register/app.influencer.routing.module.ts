import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppInfluencerComponentRegister} from './app.influencer.component.register';

const routes: Routes = [
    {
        path: '',
        component: AppInfluencerComponentRegister
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppInlfuencerRoutingModule{

}