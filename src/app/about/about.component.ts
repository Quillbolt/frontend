import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 contact_form :  FormGroup = new FormGroup({
  name:new FormControl(''),
  email: new FormControl(''),
  TextArea: new FormControl('')
 });
 submitted = false;
 constructor(private formbuider: FormBuilder){ }
 ngOnInit():void{
  this.contact_form = this.formbuider.group({
    name :['',Validators.required],
    email :['',Validators.required,Validators.email],
    TextArea: ['',Validators.required]
  }    
  )
 }
 get f(): { [key: string]: AbstractControl } {
  return this.contact_form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.contact_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.contact_form.value, null, 2));
  }
}
