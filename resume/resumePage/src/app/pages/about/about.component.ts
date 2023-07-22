import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="about">
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo optio earum ratione fuga doloremque ut repudiandae dolorem libero maxime quae! Quibusdam accusamus similique aperiam cumque, exercitationem iure reiciendis provident esse?</p>
      </div>
      <div id="experience">

        <div class="expboxone">
          <img src="assets/images/we/director.svg" alt="CBD">
          <div class="second">
            <h2>NX Global</h2>
            <h3>Director</h3>
            <h4>Oct 2021-Present</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
        </div>
        <div class="expboxtwo">
          <div class="first">
            <h2>ScootScoot</h2>
            <h3>Business Development Manager</h3>
            <h4>Apr 2021-Sep 2021</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
          <img src="assets/images/we/businessdevelopment.svg" alt="CBD">
        </div>
        <div class="expboxone">
          <img src="assets/images/we/dataanalyst.svg" alt="CBD">
          <div class="second">
            <h2>Bitfury Data Center</h2>
            <h3>Inventory and Purchasing Data Manager</h3>
            <h4>Jun 2018-Apr 2020</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
        </div>
        <div class="expboxtwo">
          <div class="first">
            <h2>Pinetree</h2>
            <h3>Warehouse Manager</h3>
            <h4>Sep 2017-May 2018</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
          <img src="assets/images/we/warehousemanager.svg" alt="CBD">
        </div>
        <div class="expboxone">
          <img src="assets/images/we/salesteamlead.svg" alt="CBD">
          <div class="second">
            <h2>MD Georgia</h2>
            <h3>Sales department Manager</h3>
            <h4>Nov 2016-Sep 2017</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
        </div>
        <div class="expboxtwo">
          <div class="first">
            <h2>Nextbrand</h2>
            <h3>CRM Manager</h3>
            <h4>Jan 2016-Nov 2016 </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
          <img src="assets/images/we/crmmanager.svg" alt="CBD">
        </div>
        <div class="expboxone">
          <img src="assets/images/we/logisticsoperator.svg" alt="CBD">
          <div class="second">
            <h2>Geoinvest</h2>
            <h3>Logistics Operator</h3>
            <h4>Jun 2015-Dec 2015</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum sapiente pariatur consequatur, distinctio corrupti voluptate, soluta error rerum incidunt sed nesciunt, tenetur obcaecati vel numquam neque ipsum illo aliquid!</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
