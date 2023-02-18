import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { RidesComponent } from './rides/rides.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { FormsModule } from '@angular/forms';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes : Routes =[
  // { path:'dashboard',component: HomeComponent },
  // { path: 'rides',component:RidesComponent}, 
  // { path: 'ride',component:RideDetailComponent},
  { path: '',  component: RidesComponent, data: { animation: 'rides' }  },
  { path: ':id', component: RideDetailComponent, data: { animation: 'ride' }}
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
    ComponentsModule,
    FormsModule,
    // BrowserAnimationsModule,
  ],
  exports:[
    RouterModule
  ]
})
export class RideModule { }
