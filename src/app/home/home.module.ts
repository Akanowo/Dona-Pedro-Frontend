import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { CarReserveComponent } from './car-reserve/car-reserve.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundBannerComponent } from '../background-banner/background-banner.component';
import { CarsFleetComponent } from './cars-fleet/cars-fleet.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    CarReserveComponent,
    WhatWeOfferComponent,
    NavbarComponent,
    BackgroundBannerComponent,
    CarsFleetComponent,
    TestimonialsComponent,
    AboutComponent,
    FooterComponent
  ]
})

export class HomeModule {}
