import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { RidesComponent } from './rides/rides.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';

const routes : Routes =[
  { path:'',component: HomeComponent },
  { path: 'rides',component:RidesComponent}, 
  { path: 'ride',component:RideDetailComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    RidesComponent,
    RideDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports:[
    RouterModule
  ]
})
export class RideModule { }
