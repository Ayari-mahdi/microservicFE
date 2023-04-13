import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/models';
import { UserserviceService } from 'src/app/serivces/userservice.service';
import { ConfirmPasswordValidator } from '../register/confirm-password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  showDetails=false;
  hide = true;
  user!:user
  hide2=true
  spinner=false;
  resetpassForm!: FormGroup;
  constructor(private fb: FormBuilder, private userservice: UserserviceService,private router:Router,) { }

  ngOnInit(): void {
    this.initForm();
  }
  changeshowDetails(){
    this.showDetails=!this.showDetails
  }
onStrengthChanged(strength: number) {
 // console.log('password strength = ', strength);
}
get f() {
  return this.resetpassForm.controls;
}
submit(){
  //console.log(this.registrationForm)
  /*const result = {};
    Object.keys(this.f).forEach(key => {
      console.log(this.f[key].value);
    })*/
    console.log(this.f["password"].value); 
  this.user=  JSON.parse(sessionStorage.getItem("user")!);
    

    this.userservice.newpwd(this.user.id,this.f["password"].value).subscribe({
      next:(data)=>{ 
       
        this.spinner=!this.spinner;
         this.router.navigate(['pages'])
       
      },
      error:(err)=>{console.log(err)
        this.spinner=!this.spinner;
        this.initForm();
      }
  })


}
initForm() {
  this.resetpassForm = this.fb.group(
    {
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(68),
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-z]).{8,68}$/)

        ]),
      ],
      cPassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(68),
          Validators.required

        ]),
      ],       
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword,
    }
  );
 
}
}
