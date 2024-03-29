import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { CarReserveComponent } from './car-reserve/car-reserve.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundBannerComponent } from '../background-banner/background-banner.component';
import { CarsFleetComponent } from './cars-fleet/cars-fleet.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TransferComponent } from './transfer/transfer.component';
import { DailyRentalComponent } from './daily-rental/daily-rental.component';
import { FooterModule } from '../footer/footer.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { CarDetailComponent } from './cars-fleet/car-detail/car-detail.component';
import { SliderComponent } from './slider/slider.component';
import { ClientsComponent } from './clients/clients.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


const homeRoutes: Routes  = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    FooterModule,
    RouterModule.forChild(homeRoutes),
    MDBBootstrapModule.forRoot()
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
    TransferComponent,
    DailyRentalComponent,
    HomeBannerComponent,
    CarDetailComponent,
    SliderComponent,
    ClientsComponent,
  ],
  exports: [ NavbarComponent, BackgroundBannerComponent ]
})

export class HomeModule {}
