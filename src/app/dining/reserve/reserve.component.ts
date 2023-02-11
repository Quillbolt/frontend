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
    date: new FormControl('')
  })
  submitted = false;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.reserve_form = this.formbuilder.group({
      fName: ['', Validators.required],
      lastname: ['', Validators.required],
      rdate: ['', Validators.required]
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
