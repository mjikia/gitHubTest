import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BeautyProductsComponent } from './projects/project-one/pages/beauty-products/beauty-products.component';
import { BeautyProductsHeaderComponent } from './projects/project-one/navigation/beauty-products-header/beauty-products-header.component';
import { BeautyProductsFooterComponent } from './projects/project-one/navigation/beauty-products-footer/beauty-products-footer.component';
import { BpLandingComponent } from './projects/project-one/pages/bp-landing/bp-landing.component';
import { BpLandingTwoComponent } from './projects/project-one/pages/bp-landing-two/bp-landing-two.component';
import { BpCardComponent } from './projects/project-one/components/bp-card/bp-card.component';
import { BpLandingThreeComponent } from './projects/project-one/pages/bp-landing-three/bp-landing-three.component';
import { BpLandingFourComponent } from './projects/project-one/pages/bp-landing-four/bp-landing-four.component';
import { BpTestimonialsComponent } from './projects/project-one/components/bp-testimonials/bp-testimonials.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { PortfolioCardComponent } from './other/components/portfolio-card/portfolio-card.component';
import { HomeHeaderComponent } from './projects/project-two/navigation/home-header/home-header.component';
import { HomeFooterComponent } from './projects/project-two/navigation/home-footer/home-footer.component';
import { HomeHomeComponent } from './projects/project-two/pages/home-home/home-home.component';
import { CarouselComponent } from './projects/project-two/components/carousel/carousel.component';
import { CarBoxComponent } from './projects/project-two/components/car-box/car-box.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeMainAdsComponent } from './projects/project-two/components/home-main-ads/home-main-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    BeautyProductsComponent,
    BeautyProductsHeaderComponent,
    BeautyProductsFooterComponent,
    BpLandingComponent,
    BpLandingTwoComponent,
    BpCardComponent,
    BpLandingThreeComponent,
    BpLandingFourComponent,
    BpTestimonialsComponent,
    FooterComponent,
    PortfolioCardComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeHomeComponent,
    CarouselComponent,
    CarBoxComponent,
    HomeMainAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
