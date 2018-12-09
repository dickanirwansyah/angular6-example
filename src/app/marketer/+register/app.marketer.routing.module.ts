import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMarketerComponentRegister} from './app.marketer.component.register';

const routes: Routes = [
    {
        path: '',
        component: AppMarketerComponentRegister
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppMarketerRoutingModule{}