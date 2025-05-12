import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './splash/pages/splash-page/splash-page.component';
import { PortfoliosListPageComponent } from './portfolio/pages/portfolios-list-page/portfolios-list-page.component';
import { CommingSoonPageComponent } from './common/pages/comming-soon-page/comming-soon-page.component';

const routes: Routes = [
  { path: '', redirectTo: "/splash", pathMatch: 'full' },
  { path: 'splash', component: SplashPageComponent },
  { path: 'portfolios', component: PortfoliosListPageComponent },
  { path: 'comming-soon', component: CommingSoonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
