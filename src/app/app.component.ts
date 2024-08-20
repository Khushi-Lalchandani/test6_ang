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
  valid = false;
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
    this.dataForm.reset();
  }

  buttonDesign(): any {
    if (this.dataForm.valid && this.valid === true) {
      return {
        cursor: 'pointer',
        'box-shadow': '0 5px 16px 5px rgba(255,255,255,.2)',
        transform: 'scale(1.04)',
        padding: '10px 20px',
        ' font-size': '15px',
        'border-radius': '12px',
        border: '1px solid #0cc5d2',
        'background-color': '#0cc5d2',
        color: ' #fff',
      };
    } else if (this.dataForm.valid && this.valid === false) {
      return {
        padding: '10px 20px',
        ' font-size': '15px',
        'border-radius': '12px',
        border: '1px solid #0cc5d2',
        'background-color': '#0cc5d2',
        color: ' #fff',
      };
    }
  }
}
