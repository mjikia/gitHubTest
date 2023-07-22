import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-box',
  templateUrl: './car-box.component.html',
  styleUrls: ['./car-box.component.scss']
})
export class CarBoxComponent {
  @Input() flname: string | undefined;
  @Input() position: string | undefined;
  @Input() imgLink: string | undefined;
}
