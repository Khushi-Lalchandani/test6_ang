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
      country: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      marriedStatus: new FormControl(false, Validators.requiredTrue),
    });
  }
  onSubmit() {
    console.log(this.dataForm.value);
    this.onReset();
  }
  onReset() {
    this.dataForm.reset();
  }
}
