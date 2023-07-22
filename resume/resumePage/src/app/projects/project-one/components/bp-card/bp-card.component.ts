import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bp-card',
  templateUrl: './bp-card.component.html',
  styleUrls: ['./bp-card.component.scss']
})
export class BpCardComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() imageSrc: string | undefined;
}
