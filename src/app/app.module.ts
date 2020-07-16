import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CarReserveService } from './home/car-reserve/car-reserve-api.service';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutBannerComponent } from './about-us/about-banner/about-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundBannerComponent } from './background-banner/background-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DCleanComponent } from './d-clean/d-clean.component';
import { ContactComponent } from './contact/contact.component';
import { FeedBackService } from 'src/shared/feedback-api.service';
import { FooterModule } from './footer/footer.module';
import { CarsCollectionComponent } from './cars-collection/cars-collection.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { EmailVerificationService } from 'src/shared/email-verification-api.service';
import { NgxSpinnerModule } from 'ngx-spinner';


const appRoutes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AboutBannerComponent,
    DCleanComponent,
    ContactComponent,
    CarsCollectionComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    FooterModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ CarReserveService, FeedBackService, EmailVerificationService ],
  bootstrap: [AppComponent],
   exports: [ NavbarComponent, ReactiveFormsModule, BackgroundBannerComponent ]
})
export class AppModule { }
