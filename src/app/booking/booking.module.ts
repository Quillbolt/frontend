import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TicketComponent } from './ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingComponent } from './pricing/pricing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TicketComponent } from './ticket/ticket.component';
import { NgxPrintModule } from 'ngx-print';

const routes : Routes = [
  { path:'ticket',component:TicketComponent },
  { path:'',component:PricingComponent },
  { path:'pay',component:CheckoutComponent}
]

@NgModule({
  declarations: [
    PricingComponent,
    CheckoutComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
  exports: [
    RouterModule
  ]
})
export class BookingModule { }
