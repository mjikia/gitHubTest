import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BeautyProductsComponent } from './projects/project-one/pages/beauty-products/beauty-products.component';
import { HomeHomeComponent } from './projects/project-two/pages/home-home/home-home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, data: {animation: 'Home'}},
  {path: "about", component: AboutComponent, data: {animation: 'About'}},
  {path: "portfolio", component: PortfolioComponent, data: {animation: 'Portfolio'}},
  {path: "contact", component: ContactComponent, data: {animation: 'Contact'}},
  {path: "beauty", component: BeautyProductsComponent},
  {path: "home", component: HomeHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
