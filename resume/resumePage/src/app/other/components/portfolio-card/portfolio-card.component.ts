import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() imageSrc: string | undefined;
}
