import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
 @Input() title: string ='Water Park Ticket'
 @Input() date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);
month = this.date.toLocaleString('default', { month: 'long' });
  @Input() Description: string = 'Lorem Ipsum, Lorem Ipsum'
}
