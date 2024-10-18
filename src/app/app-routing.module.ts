import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './splash/pages/splash-page/splash-page.component';
import { PortfoliosListPageComponent } from './portfolio/pages/portfolios-list-page/portfolios-list-page.component';
import { MrInfoPageComponent } from './distribution/pages/mr-info-page/mr-info-page.component';

const routes: Routes = [
  { path: '', redirectTo: "/splash", pathMatch: 'full' },
  { path: 'splash', component: SplashPageComponent },
  { path: 'portfolios', component: PortfoliosListPageComponent },
  { path: 'mr-info', component: MrInfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
