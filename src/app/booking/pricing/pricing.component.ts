import { Component } from '@angular/core';
import { TICKET } from '../../interfaces/ticket.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  price = TICKET;
}
