import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main class="container">
      <div>
        <div style="display: flex; justify-content: space-between" class="main-view">

          <div class="">
            <h1 class="display-3">Front-end Angular developer</h1>
            <div style="display: flex;">
            <p class="h3">Hi, I'm a passionate front-end Angular developer based in Tbilisi, Georgia</p>
            </div>
          </div>

          <div id="hachi">
            <img src="assets/images/merabjikia.jpg" alt="CBD" class="imghover">
            <h3 class="texthover">His name is Hachi, he's a Japanese Akita. Yes, he is very cute.</h3>
          </div>

        </div>

        <div id="stacks">
          <div class="stack">
            <div class="stack-heading">Tech Stack</div>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>Javascript/Typescript</li>
              <li>Angular</li>
            </ul>
          </div>
          <div class="stack">
            <div class="stack-heading">Frameworks</div>
            <ul>
              <li>Material</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="stack">
            <div class="stack-heading">Back-end familiarity</div>
            <ul>
              <li>ExpressJs</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
