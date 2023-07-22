import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
<div class="portfolio container">

  <app-portfolio-card 
  title="Beauty Products landing page"
  description="Mobile Friendly, responsive mockup"
  imageSrc="assets/images/landings/beautyproductslanding.JPG"></app-portfolio-card>

</div>

<button routerLink="/home">HOME</button>
  
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

}
