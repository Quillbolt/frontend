import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  BookingForm;
  constructor(private FormBuilder:FormBuilder){
    this.BookingForm = this.FormBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required,Validators.pattern("/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/")]],
      debitcard:['',[Validators.required]]
    })

    
  }
  onsubmit(){
    console.log.apply(this.BookingForm.value);
    }
}
