import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { AmusementComponent } from './amusement/amusement.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { FoodComponent } from './food/food.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'amusement', component: AmusementComponent },
  { path: 'exhibit', component: ExhibitComponent },
  { path: 'food', component: FoodComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
