import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardModel!:CardModel;

  constructor() { }

  ngOnInit(): void {
  }

}

export class CardModel{
  title: string;
  description: string;
  imagePath!: string;

  constructor(title: string, description: string){
    this.title = title;
    this.description = description;
  }
}
