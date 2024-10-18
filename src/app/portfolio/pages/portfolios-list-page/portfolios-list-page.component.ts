import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from 'src/app/common/components/card/card.component';

@Component({
  selector: 'app-portfolios-list-page',
  templateUrl: './portfolios-list-page.component.html',
  styleUrls: ['./portfolios-list-page.component.scss']
})
export class PortfoliosListPageComponent {
  lifeHackerCard: CardModel;
  medicalSentenceCard: CardModel;
  
  constructor(
    private router: Router
  ) { 
    this.lifeHackerCard = new CardModel("Life Hacker", `Tracking progress of Goals and Tasks and Daily Journals. Also has a "Mental Notes" modules to keep track of ideas.`);
    this.lifeHackerCard.imagePath = "/assets/images/stop_watch.png";

    this.medicalSentenceCard = new CardModel("Medical ICD Mapper", "NLP analysis using MedSentVac language model. This app can take a medical sentacnce input and predict the best match ICD code output");
    this.medicalSentenceCard.imagePath = "/assets/images/medical.png";
  }

  clickBack(){
    this.router.navigate(['splash']);
  }

  clickLifeHacker(){
    window.open("https://mandarinrobotics.co/mr-web/home", "_blank");
  }
}
