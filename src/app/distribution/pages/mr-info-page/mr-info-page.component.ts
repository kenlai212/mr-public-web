import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mr-info-page',
  templateUrl: './mr-info-page.component.html',
  styleUrls: ['./mr-info-page.component.scss']
})
export class MrInfoPageComponent{
  constructor(
    private router: Router
  ){}

  businessRegistrationNumber: string = "800-xxx-xxx-xxxx";

  clickBack(){
    this.router.navigate(['splash']);
  }
}
