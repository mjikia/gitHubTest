import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <button [routerLink]="['/woman']" routerLinkActive="active" style="cursor: pointer">Woman</button>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

}
