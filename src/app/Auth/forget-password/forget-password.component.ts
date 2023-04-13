import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassForm!: FormGroup;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm()
  }
  get f() {
    return this.forgetpassForm.controls;
  }
  submit(){
    const result = {};
    Object.keys(this.f).forEach(key => {
      console.log(this.f[key].value);
    })
  }
  initForm() {
    this.forgetpassForm = this.fb.group(
      {
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(8),
            Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
            Validators.required
          ]),
        ],
      })}

}
