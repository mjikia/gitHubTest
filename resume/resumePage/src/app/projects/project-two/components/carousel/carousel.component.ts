import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChild('scrollWrapper', { static: false }) scrollWrapper!: ElementRef;

  scrollLeft() {
    const scrollContainer = this.scrollWrapper.nativeElement;
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft - 300,
      behavior: 'smooth'
    });
    console.log("Hello World Left")
  }

  scrollRight() {
    const scrollContainer = this.scrollWrapper.nativeElement;
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft + 300,
      behavior: 'smooth'
    });
    console.log("Hello World Right")
  }
}
