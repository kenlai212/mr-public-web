import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash/pages/splash-page/splash-page.component';
import { PortfoliosListPageComponent } from './portfolio/pages/portfolios-list-page/portfolios-list-page.component';
import { CardComponent } from './common/components/card/card.component';
import { CommingSoonPageComponent } from './common/pages/comming-soon-page/comming-soon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    PortfoliosListPageComponent,
    CardComponent,
    CommingSoonPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

