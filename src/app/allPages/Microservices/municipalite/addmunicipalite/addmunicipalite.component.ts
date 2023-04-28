import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { municipalite } from 'src/app/Models/models';
import { MunicipaliteService } from 'src/app/serivces/municipalite/municipalite.service';

@Component({
  selector: 'app-addmunicipalite',
  templateUrl: './addmunicipalite.component.html',
  styleUrls: ['./addmunicipalite.component.css']
})
export class AddmunicipaliteComponent implements OnInit {

  @Input() title='';
  @Input() municip: municipalite |undefined;
  municip2 :municipalite=new municipalite
  @Input() updateoradd=''
  @Output() closeEvent = new EventEmitter<string>();
  usercinerror='';
  emailerror='';
  spinner=false;
  updateForm!: FormGroup;
  constructor(private fb:FormBuilder,
    private muniservice :MunicipaliteService) {}
  closemodal() {
    this.closeEvent.emit();
  }
  ngOnInit(): void {
    if(this.municip!=undefined)
{
this.municip2.nom=this.municip.nom;
this.municip2.email=this.municip.email;
this.municip2.id=this.municip.id;
this.municip2.telephone=this.municip.telephone;
this.municip2.adresse=this.municip.adresse;
  this.initForm(this.municip2)
}
else{this.initForm(this.municip2)}
  }
submit(){console.log(this.municip2)

  this.usercinerror=''
  this.emailerror=''
  this.spinner=true
  if(this.updateoradd==='add'){
    this.muniservice.addmunicip(this.municip2).subscribe({
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
    this.muniservice.update(this.municip2).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.spinner=false
        this.municip=this.municip2;
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


initForm(muni:municipalite) {
  this.updateForm = this.fb.group(
    {
      adresse: [
        muni.adresse,
        Validators.compose([
          Validators.required,

        ]),
      ],
      email: [
        muni.email,
        Validators.compose([
          Validators.required,
 
        ]),
      ],
      nom: [
        muni.nom,
        Validators.compose([
          Validators.required,
    

        ]),
      ],

      telephone: [
        muni.telephone,
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
