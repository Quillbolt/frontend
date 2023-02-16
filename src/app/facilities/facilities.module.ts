import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment/equipment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {path: 'equipment', component: EquipmentComponent},
  {path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    EquipmentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class FacilitiesModule { }
