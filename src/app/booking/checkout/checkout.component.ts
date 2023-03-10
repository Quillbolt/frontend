import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Ticket } from '../../interfaces/ticket.interface';
import { LocalService } from '../../services/local.service';


export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const today = new Date().getTime();

    if(!(control && control.value)) {
      // if there's no control or no value, that's ok
      return null;
    }

    // return null if there's no errors
    return control.value.getTime() > today 
      ? {invalidDate: 'You cannot use future dates' } 
      : null;
  }
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkout_form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    Tel: new FormControl(''),
    Cardnumber: new FormControl(''),
    ExpiryDate: new FormControl(''),
    CVC: new FormControl(''),
    ZIP: new FormControl(''),
  });
  
  submitted = false;
  Adults: number = 1;
  Child: number = 0;
  date: Date = new Date;
  products : Ticket[] = [
    {name:"Adults", prices:39,quantity:1 },
    {name:"Child", prices: 29, quantity:0 }
  ];
  // Total: number = 0;
  constructor(
    private formbuider: FormBuilder,
    private localservice: LocalService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.checkout_form = this.formbuider.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Tel: ['', Validators.required],
      Cardnumber: ['', Validators.required],
      ExpiryDate: ['', Validators.required],
      CVC: ['', Validators.required],
      postalCode: [''],
  
    }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.checkout_form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.checkout_form.invalid) {
      return;
    }
    // this.id = this.id + 1;
    const formValue= (JSON.stringify(this.checkout_form.value, null, 2));
    // console.log(JSON.stringify(this.products,null, 2));
    const date = JSON.stringify(this.date);
    let save= formValue.concat(JSON.stringify(this.products));
    save = save.concat(date);
    
    this.localservice.saveData('mydata', save)
    this.router.navigate(['booking','ticket'])
  }
  
  get total() {
    let Total = 0;
    for (let p of this.products) {
      Total += p.prices * p.quantity;
    }
    return Math.round(Total * 100) / 100;
  }
}
