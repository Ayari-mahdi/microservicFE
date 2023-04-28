import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { citoyen } from 'src/app/Models/models';
import { CitoyenService } from 'src/app/serivces/citoyen/citoyen.service';

@Component({
  selector: 'app-addcitoyen',
  templateUrl: './addcitoyen.component.html',
  styleUrls: ['./addcitoyen.component.css']
})
export class AddcitoyenComponent implements OnInit {
  usercinerror='';
  emailerror='';
  spinner=false;
  @Input() title='';
  @Input() citoyen: citoyen |undefined;
  citoyen2 :citoyen=new citoyen
  @Input() updateoradd=''
  updateForm!: FormGroup;
  constructor(private fb:FormBuilder,
    private citoyenservice :CitoyenService) {}
  @Output() closeEvent = new EventEmitter<string>();
  closemodal() {
    this.closeEvent.emit();
  }
  ngOnInit(): void {
    if(this.citoyen!=undefined)
{
this.citoyen2.cin=this.citoyen.cin;
this.citoyen2.email=this.citoyen.email;
this.citoyen2.nom=this.citoyen.nom;
this.citoyen2.prenom=this.citoyen.prenom;
this.citoyen2.id=this.citoyen.id;
this.citoyen2.telephone=this.citoyen.telephone;
this.citoyen.municipName=this.citoyen.municipName;
  this.initForm(this.citoyen2)
}
else{this.initForm(this.citoyen2)}
  }
submit(){console.log(this.citoyen2)

  this.usercinerror=''
  this.emailerror=''
  this.spinner=true
  if(this.updateoradd==='add'){
    this.citoyenservice.addcitoyen(this.citoyen2).subscribe({
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
    this.citoyenservice.update(this.citoyen2).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.spinner=false
        this.citoyen=this.citoyen2;
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


initForm(citoyen:citoyen) {
  this.updateForm = this.fb.group(
    {
      cin: [
        citoyen.cin,
        Validators.compose([
          Validators.required,

        ]),
      ],
      email: [
        citoyen.email,
        Validators.compose([
          Validators.required,
 
        ]),
      ],
      nom: [
        citoyen.nom,
        Validators.compose([
          Validators.required,
    

        ]),
      ],
      prenom: [
        citoyen.prenom,
        Validators.compose([
          Validators.required,

        ]),
      ],
      municipName: [
        citoyen.municipName,
        Validators.compose([
          Validators.required,
        ]),
      ],
      telephone: [
        citoyen.telephone,
        Validators.compose([
          Validators.required,

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
