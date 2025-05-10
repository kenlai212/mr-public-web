import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from 'src/app/common/components/card/card.component';

@Component({
  selector: 'app-portfolios-list-page',
  templateUrl: './portfolios-list-page.component.html',
  styleUrls: ['./portfolios-list-page.component.scss']
})
export class PortfoliosListPageComponent {
  lifeHackerCard: CardModel;
  icdSearchCard: CardModel;
  semanticSearchCard: CardModel;
  
  constructor(
    private router: Router
  ) { 
    this.lifeHackerCard = new CardModel("Life Hacker", `Tracking progress of Goals and Tasks and Daily Journals. Also has a "Mental Notes" modules to keep track of ideas.`);
    this.lifeHackerCard.imagePath = "/assets/images/stop_watch.png";

    this.icdSearchCard = new CardModel("ICD Search", "NLP analysis using MedSentVac language model. This app can take a medical sentacnce input and predict the best match ICD codes output.");
    this.icdSearchCard.imagePath = "/assets/images/medical.png";

    this.semanticSearchCard = new CardModel("Semantic Search","Find contextual information inside PDF files.")
    this.semanticSearchCard.imagePath = "/assets/images/pdf_icon.png";
  }

  clickBack(){
    this.router.navigate(['splash']);
  }

  clickLifeHacker(){
    window.open("https://mandarinrobotics.co/mr-web/home", "_blank");
  }

  clickICDSearch(){
    window.open("https://mandarinrobotics.co/ai-demo/search-icd", "_blank");
  }

  clickSemanticSearch(){
    window.open("https://mandarinrobotics.co/ai-demo/semantic-search", "_blank");
  }
}
