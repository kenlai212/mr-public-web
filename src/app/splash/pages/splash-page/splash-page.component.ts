import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent{

  constructor(
    private router: Router
  ) { }

  clickAction(destination: string){
    switch(destination){
      case "portfolio":
        this.router.navigate(['portfolios']);
        break;
      case "ludas":
        break;
      case "distribution":
        this.router.navigate(['https://mandarinrobotics.co/distribution']);
        break;
    }
  }
}
