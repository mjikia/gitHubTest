import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ForeverywomanComponent } from './projects/foreverywoman/foreverywoman.component';

const routes: Routes = [
  {path: "", component: HomeComponent, data: {animation: 'Home'}},
  {path: "about", component: AboutComponent, data: {animation: 'About'}},
  {path: "portfolio", component: PortfolioComponent, data: {animation: 'Portfolio'}},
  {path: "contact", component: ContactComponent, data: {animation: 'Contact'}},
  {path: "woman", component: ForeverywomanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
