import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', redirectTo: '' },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'ride',
    loadChildren: () => import('./ride/ride.module').then(m => m.RideModule)
  },
  {
    path: 'dining',
    loadChildren: () => import('./dining/dining.module').then(m => m.DiningModule)
  },
  { path: 'facilities', loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesModule) },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FAQComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
