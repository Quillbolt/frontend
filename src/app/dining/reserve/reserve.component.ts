import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reserve_form: FormGroup = new FormGroup({
    fName: new FormControl(''),
    lastname: new FormControl(''),
    guest:new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  })
  submitted = false;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.reserve_form = this.formbuilder.group({
      fName: ['', Validators.required],
      lastname: ['', Validators.required],
      guest:['',[Validators.required,Validators.min(2)]],
      phone:['',[Validators.required,Validators.minLength(9)]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.reserve_form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.reserve_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.reserve_form.value, null, 2));
  }
}
