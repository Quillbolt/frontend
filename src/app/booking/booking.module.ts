import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { Routes } from '@angular/router';

const routes : Routes = [
  { path:'ticket',component:TicketComponent }
]

@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
