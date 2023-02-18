import { Component } from '@angular/core';
import { TICKET } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  price = TICKET;
}
