import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMarketerComponentRegister} from './app.marketer.component.register';
import {AppMarketerRoutingModule} from './app.marketer.routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppMarketerRoutingModule
    ],
    declarations: [AppMarketerComponentRegister]
})
export class AppMarketerModule{

}