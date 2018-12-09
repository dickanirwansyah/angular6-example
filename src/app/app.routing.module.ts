import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppSharedComponent} from './shared/app.shared.component';
/**auth guard */
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AppSharedComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            /**login influencer */
            {
                path: 'login-influencer',
                loadChildren: './influencer/+login/app.login.module#AppLoginModule'
            },
            /**register influencer*/
            {
                path: 'influencer-register',
                loadChildren: './influencer/+register/app.influencer.module#AppInfluencerModule'
            },
            /**register marketer */
            {
                path: 'marketer-register',
                loadChildren: './marketer/+register/app.marketer.module#AppMarketerModule'
            },
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full'
            },    
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{routes}