import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './home/transfer/transfer.component';
import { DailyRentalComponent } from './home/daily-rental/daily-rental.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DCleanComponent } from './d-clean/d-clean.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CarDetailComponent } from './home/cars-fleet/car-detail/car-detail.component';


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
  { path: 'contact', component: ContactComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: '**', redirectTo: 'home/transfer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
