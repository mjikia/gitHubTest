import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <h1 routerLink="">Merab.dev</h1>
      <ul>
        <li routerLink="" routerLinkActive="active">Home</li>
        <li routerLink="about" routerLinkActive="active">About</li>
        <li routerLink="portfolio" routerLinkActive="active">Portfolio</li>
        <li routerLink="contact" routerLinkActive="active">Contact</li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
