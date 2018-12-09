import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

/**routing module */
import {AppRoutingModule} from './app.routing.module';

/**component */
import {AppHeaderComponent} from './shared/header/app.header.component';
import {AppSharedComponent} from './shared/app.shared.component';

/**service */
import {InfluencerService} from './influencer/service/influencer.service';
/**auth guard */
import {AuthGuard} from '../app/guard/auth.guard';
import { AuthProtected } from './guard/auth.protected';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppSharedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    InfluencerService,
    AuthGuard,
    AuthProtected
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
