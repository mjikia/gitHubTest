import { Component } from '@angular/core';

@Component({
  selector: 'app-foreverywoman',
  template: `
    <div class="main">
          <div id="square">
            <div>FOR.</div>
          </div>
          <div class="navbar">
            <span></span>
            <ul>
              <li>Collection</li>
              <li>Lookbook</li>
              <li>About</li>
            </ul>
          </div>
        <img src="assets/images/women/badge.png" alt="CBD" id="badge">
        <div class="landingPage">
          <img src="assets/images/women/2023.svg" alt="CBD" id="year">
          <img src="assets/images/women/few.svg" alt="CBD" id="few">
          <img src="assets/images/women/groupphoto.png" alt="CBD" id="groupphoto">
        </div>
    </div>
    <div class="seperator">
      <div>The Present Is Female: The Designers Behind a Fashion Revolution &nbsp; &nbsp; &nbsp; The Present Is Female: The Designers Behind a Fashion Revolution</div>
    </div>
    <div class="second">
      <div style="display: flex; align-items: center; margin-left: 10vw; margin-top: 35vh">
        <div class="box"></div>
        <div style="letter-spacing: .4rem; margin-left: 1vw">CRAFTSMANSHIP</div>
      </div>
      <div style="font-size: 10rem; width: 55vw; margin-left: 10vw; line-height: 9.3rem; margin-top: 5vh;">Real women fashion state, insidious whispering of men</div>
      <div style="margin-left: 15vw; display: flex; width: 40vw; justify-content: space-between; margin-top: 5vh">
        <div style="width: 17vw; text-align: right; display: flex; flex-direction: column; align-items: end; font-size: 0.8rem">
          <div>Still, what we never reckoned with then was the notion that the achievement of women designers today would amount to a reshaping of the industry—not by fitting in with male-led corporate rules but by steadily ignoring them, trusting their own instincts, living how they wish, and opening wide the creative space for a whole generation to thrive.</div>
          <div style="border: solid 2px #BE6C42; width: 10vw; height: 5vh; display: flex; align-items: center; justify-content: center; margin-top: 3vh">
            <div>Discover more</div>
          </div>
        </div>
        <div class="spacer" style="width: 2px; background-color: #BE6C42; height: 25vh"></div>
        <div style="width: 16vw; font-size: 1.8rem">They're defying the norm and redefining what it means to be beautiful.</div>
      </div>
    </div>
  `,
  styleUrls: ['./foreverywoman.component.scss']
})
export class ForeverywomanComponent {

}
