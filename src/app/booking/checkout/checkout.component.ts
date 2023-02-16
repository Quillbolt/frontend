import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from 'src/app/services/local.service';

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
  id:number = 0;
  Total:number = this.Adults*39+this.Child*39*0.75
  constructor(
    private formbuider: FormBuilder,
    private localservice: LocalService
    ){ }
  ngOnInit(): void {
    this.checkout_form = this.formbuider.group({
      firstname :['',Validators.required],
      lastname :['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      Tel :['',Validators.required],
      Cardnumber :['',Validators.required],
      ExpiryDate :['',Validators.required],
      CVC:['',Validators.required],
      postalCode :['']
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
      this.id = this.id+1;
      console.log(JSON.stringify(this.checkout_form.value, null, 2));
      this.localservice.saveData(this.id.toString(),this.checkout_form.value)
    }
}
