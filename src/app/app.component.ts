import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataForm!: FormGroup;
  genders = ['Male', 'Female', 'Others'];
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      fname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      country: new FormControl(null),
      gender: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.dataForm);
    console.log(this.dataForm.controls['fname'].valid);
  }
}
