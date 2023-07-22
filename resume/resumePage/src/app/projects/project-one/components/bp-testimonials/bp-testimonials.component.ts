import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bp-testimonials',
  templateUrl: './bp-testimonials.component.html',
  styleUrls: ['./bp-testimonials.component.scss']
})
export class BpTestimonialsComponent {
  @Input() title: string | undefined;
  @Input() review: string | undefined;
  @Input() flname: string | undefined;
  @Input() origin: string | undefined;
  @Input() imageSrc: string | undefined;
}
