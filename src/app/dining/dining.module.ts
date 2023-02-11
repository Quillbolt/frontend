import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  { path:'',component:HomeComponent },
  { path:'menu',component:MenuComponent},
  { path:'reserve',component:ReserveComponent},
]

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ReserveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class DiningModule { }
