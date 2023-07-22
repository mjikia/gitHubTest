import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <!--  -->
        <h1 routerLink="">Merab.Jikia</h1>
        <div class="col-lg-8"></div>
        <img 
        src="assets/images/menu.svg" 
        alt="Cannot be displayed" 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavOne" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">

        <div class="collapse navbar-collapse" id="navbarNavOne">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" routerLink="" routerLinkActive="active">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="about">About</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
