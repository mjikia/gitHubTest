import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <div>
        <div style="display: flex;">
          <div>
            <h1>Front-end Angular developer</h1>
            <div style="display: flex;">
            <p>Hi, I'm Merab Jikia, a passionate front-end Angular developer based in Tbilisi, Georgia</p>
            </div>
          </div>
          <div id="hachi">
            <img src="assets/images/merabjikia.jpg" alt="CBD" class="imghover">
            <h3 class="texthover">His name is Hachi, he's a Japanese Akita. Yes, he is very cute.</h3>
          </div>
          </div>
        <div id="stacks">
          <div class="stack">
            <h2>Tech Stack</h2>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>Javascript/Typescript</li>
              <li>Angular</li>
            </ul>
          </div>
          <div class="stack">
            <h2>Frameworks</h2>
            <ul>
              <li>Angular Material</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="stack">
            <h2>Back-end familiarity</h2>
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
