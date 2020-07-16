import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './home/transfer/transfer.component';
import { DailyRentalComponent } from './home/daily-rental/daily-rental.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DCleanComponent } from './d-clean/d-clean.component';
import { ContactComponent } from './contact/contact.component';
import { CarsCollectionComponent } from './cars-collection/cars-collection.component';
import { PromotionsComponent } from './promotions/promotions.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'transfer', component: TransferComponent },
      { path: 'daily-rental', component: DailyRentalComponent },
      { path: '**', redirectTo: 'transfer' }
    ]
  },
  { path: 'about', component: AboutUsComponent },
  { path: 'dclean', component: DCleanComponent },
  { path: 'gallery', component: CarsCollectionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: '**', redirectTo: 'home/transfer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
