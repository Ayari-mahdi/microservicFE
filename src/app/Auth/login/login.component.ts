import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user, userauth } from 'src/app/Models/models';
import { UserserviceService } from 'src/app/serivces/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userauth!: userauth;
 user!:user;
  departement:any;
  loginForm!: FormGroup;
  hasError!: boolean;
 @Output()
  hide=true
  messageSuccess!:string;
  messageError!:string;
  spinner=false;
  constructor(private fb: FormBuilder,
    private router:Router,
    private userservice: UserserviceService,
    ) {this.userauth=new userauth 
    this.user=new user}

  ngOnInit(): void {
this.initForm()
  }
  get f() {
    return this.loginForm.controls;
  }
  submit(){
    this.spinner=!this.spinner;
    const result = {};
    Object.keys(this.f).forEach(key => {
      console.log(this.f[key].value);
       /*this.router.navigate(['/pages']); */
    })
   
  /*  let User:JSON = <JSON><unknown>{
      "userCin": this.f['userCin'].value,
      "password": this.f['password'].value
    }*/
    this.userservice.auth(this.userauth).subscribe({
      next:(data)=>{ 
        this.user=data;
        this.spinner=!this.spinner;
        if(this.user.active===1){
         this.router.navigate(['pages'])
        }
        else{
          this.router.navigate(['auth/reset-password'])
        }
      },
      error:(err)=>{console.log(err)
        this.spinner=!this.spinner;
        this.initForm();
      }
  })

  }
initForm() {
  this.loginForm = this.fb.group(
    {
      userCin: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
     
      password: [
        null,
        Validators.compose([    
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(68),
          //Validators.pattern(/^(?=.*\d)(?=.*[a-z]).{8,68}$/)
        ]),
      ],
      
   /*   emailVerificationUrl: [
      //  environment.email_verification_url,
      null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500),
          Validators.required

        ]),
      ],*/

      //REQUIREDTRUE NOT REQUIRED
      
     
    },
    {
    
    }
  );
 
}
}
