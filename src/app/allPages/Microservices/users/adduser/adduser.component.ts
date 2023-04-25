import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/Models/models';
import { UserserviceService } from 'src/app/serivces/userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  usercinerror='';
  emailerror='';
  spinner=false;
 @Input() title='';
  @Input() user: user |undefined;
  user2:user=new user
  @Input() updateoradd=''
  updateForm!: FormGroup;
  constructor(private fb:FormBuilder,
    private userserivce :UserserviceService) {}
  @Output() closeEvent = new EventEmitter<string>();

  closemodal() {
    this.closeEvent.emit();
  }
  ngOnInit(): void {
console.log(this.user)
if(this.user!=undefined)
{
this.user2.name=this.user.name;
this.user2.email=this.user.email;
this.user2.userCin=this.user.userCin;
this.user2.active=this.user.active;
this.user2.id=this.user.id;
this.user2.password=this.user.password;
this.user2.roles=this.user.roles;
  this.initForm(this.user2)
}
else{this.initForm(this.user2)}
 }
submit(){
  this.usercinerror=''
  this.emailerror=''
  this.spinner=true
  console.log(this.user2)
  if(this.updateoradd==='add'){
    this.userserivce.reg(this.user2).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.spinner=false
        this.closemodal()

      },
      error:(err)=>{console.log("err here",err)
      this.spinner=false
      let obj = JSON.parse(JSON.stringify(err.error));
      console.log(obj.message)
      if (obj.message==="User cin exist"){
            this.usercinerror='bordercolor';
      }
      else{
           this.emailerror='bordercolor';
      }
      },
  })
  }
  else if(this.updateoradd==='update'){
    this.userserivce.update(this.user2).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.spinner=false
        this.user=this.user2;
        this.closemodal()
      },
      error:(err)=>{console.log("err here",err)
     
      this.ngOnInit()
      this.spinner=false
      let obj = JSON.parse(JSON.stringify(err.error));
      console.log(obj.message)
      }
  })
  }


}
 initForm(user:user) {
    this.updateForm = this.fb.group(
      {
        userCin: [
          user.userCin,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8), 
          ]),
        ],
        email: [
          user.email,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(65), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          ]),
        ],
        name: [
          user.name,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(65), 
          ]),
        ],
        role: [
          user.roles,
          Validators.compose([
            Validators.required,

          ]),
        ],
        active: [
          user.active,
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
