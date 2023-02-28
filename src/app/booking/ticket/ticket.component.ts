import { Component, Input, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
 @Input() title: string ='Water Park Ticket'
 @Input() date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);
month = this.date.toLocaleString('default', { month: 'long' });
  @Input() Description: string = 'Lorem Ipsum, Lorem Ipsum'
  response?: any;
  constructor(
    private service: LocalService
  ){
    
  }

  ngOnInit() {
    this.response = JSON.parse(localStorage.getItem('mydata')!);
    console.log(this.response);
    
  }
}
