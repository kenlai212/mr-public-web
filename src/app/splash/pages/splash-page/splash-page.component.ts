import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent{
  baseHref:string = environment.basehref;
  
  constructor(
    private router: Router
  ) { }

  clickAction(destination: string){
    switch(destination){
      case "portfolio":
        this.router.navigate(['portfolios']);
        break;
      case "blog":
        this.router.navigate(['comming-soon']);
        break;
      case "distribution":
        window.open(environment.distributionURL, "_blank");
        break;
    }
  }
}
