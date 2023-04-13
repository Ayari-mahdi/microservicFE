import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormsModule } from '@angular/forms';
import { OnDestroy, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { first, map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {NgxCaptchaModule,ReCaptcha2Component} from 'ngx-captcha';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  siteKey!:string;
  hl!:string;
  departement:any;
  registrationForm!: FormGroup;
  hasError!: boolean;
 @Output()
  StrengthChange!: EventEmitter<number>;
  passwordStrength!:number;
  messageSuccess!:string;
  messageError!:string;
  agreementError!:string;
  @ViewChild("password") password!:ElementRef;
  @ViewChild("cPassword") passwordConfirmation!:ElementRef;
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  svgUrl!:string;
  confirmationSvgUrl!:string;
  showDetails=false;
  hide = true;
  hide2=true
  spinner=false;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Direction Generale', 'Commercial', 'Marketing', 'Produit'];
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> | undefined;
  constructor(private fb: FormBuilder,) 
  {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );

   }
/********************************* */

add(event: MatChipInputEvent): void {
            const value = (event.value || '').trim();
            if (value) { 
              this.fruits.push(value);
            
            }
            event.chipInput!.clear();

            this.fruitCtrl.setValue(null);
          }

remove(fruit: string): void {
          const index = this.fruits.indexOf(fruit);
          if (index >= 0) {
            this.fruits.splice(index, 1);
            this.fruitControls.removeAt(index)
          }
         }


selected(event: MatAutocompleteSelectedEvent): void {
        let x =this.fruits.indexOf(event.option.viewValue)
        if(x===-1)
        {
          this.fruits.push(event.option.viewValue);
          this.fruitControls.push(this.fb.control(event.option.viewValue));
        }
 
          this.fruitInput!.nativeElement.value = '';
          this.fruitCtrl.setValue(null);
        }

private _filter(value: string): string[] {
          const filterValue = value.toLowerCase();

          return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
        }

ngOnInit(): void {
  this.siteKey="6Lf0vIMfAAAAAME8vIdOIY1Ih0vaS-dkkVOFHf7E"

        this.initForm();

        }

handleReset(){
 // console.log("cpatchaa",this.captchaElem.reset)
  
  this.captchaElem.reloadCaptcha()
// this.captchaElem.resetCaptcha()
}

changeshowDetails(){
            this.showDetails=!this.showDetails
          }

onStrengthChanged(strength: number) {
            //console.log('password strength = ', strength);
          }

get f() {
          return this.registrationForm.controls;
        }
get fruitControls(): FormArray {
          return this.registrationForm.controls['departement']  as FormArray;
        }


submit(){
  
            const registerformdata:any = {};
              Object.keys(this.f).forEach(key => {
                registerformdata[key]=this.f[key].value
              })
                console.log(registerformdata);
                if(registerformdata['username']!='test')
                {
                  this.initForm()
                  this.fruits=[]
                  console.log(this.fruitControls)
                  this.spinner=!this.spinner
                  this.handleReset()
                }
          }

initForm() {
 
  this.registrationForm = this.fb.group(
    {
      firstname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          Validators.required
        ]),
      ],
      lastname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          Validators.required
        ]),
      ],
      username: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          Validators.required
        ]),
      ],
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
    /*  departement: [
       [],
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          Validators.required
        ]),
      ],*/
      departement:  this.fb.array([], Validators.required),


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
      recaptcha: ['', Validators.required],
      agree: [false, Validators.compose([Validators.requiredTrue])],
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword,
    }
  );
 
}
}
