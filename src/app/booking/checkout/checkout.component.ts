import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  checkout_form :  FormGroup = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email: new FormControl(''),
    Tel: new FormControl(''),
    Cardnumber: new FormControl(''),
    ExpiryDate: new FormControl(''),
    CVC: new FormControl(''),
    ZIP: new FormControl('')
   });
  submitted = false;
  Adults:number = 1;
  Child:number = 0;
  Total:number = this.Adults*39+this.Child*39*0.75
  constructor(private formbuider: FormBuilder){ }
  ngOnInit(): void {
    this.checkout_form = this.formbuider.group({
      firstname :['',Validators.required],
      lastname :['',Validators.required],
      email :['',Validators.required,Validators.email],
      Tel :['',Validators.required],
      Cardnumber :['',Validators.required],
      ExpiryDate :['',Validators.required],
      CVC:['',Validators.required],
      Zipcode :['',Validators.required]
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
      
      console.log(JSON.stringify(this.checkout_form.value, null, 2));
    }
}
