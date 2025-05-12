import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comming-soon-page',
  templateUrl: './comming-soon-page.component.html',
  styleUrls: ['./comming-soon-page.component.scss']
})
export class CommingSoonPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickBack(){
    this.router.navigate(['splash']);
  }
}
