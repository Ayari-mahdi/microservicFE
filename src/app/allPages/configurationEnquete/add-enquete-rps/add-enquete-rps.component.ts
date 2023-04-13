import { Component, OnInit } from '@angular/core';
import { fadefromright } from 'src/app/animation/animations';

@Component({
  selector: 'app-add-enquete-rps',
  templateUrl: './add-enquete-rps.component.html',
  styleUrls: ['./add-enquete-rps.component.css'],
  animations:[fadefromright]
})
export class AddEnqueteRPSComponent implements OnInit {

  previous=false;
  last=false;
  formclass1="current"
  formclass2="pending"
  formclass3="pending"
  formclass4="pending"
  stepperclass1="current"
  stepperclass2="pending"
  stepperclass3="pending"
  stepperclass4="pending"
    constructor() { }
  
    ngOnInit(): void {
    }
  nextstep(){
  
  
  if(this.stepperclass1==="current")
  {
    this.previous=true;
    this.stepperclass1="completed";
    this.formclass1="completed";
    this.stepperclass2="current";
    this.formclass2="current"
  }
  else if(this.stepperclass2==="current")
  {
    this.stepperclass2="completed";
    this.formclass2="completed";
    this.stepperclass3="current";
    this.formclass3="current"
  }
  else if(this.stepperclass3==="current")
  {
    this.stepperclass3="completed";
    this.formclass3="completed";
    this.stepperclass4="current";
    this.formclass4="current"
    this.last=true
  }
  
  }
  previousstep(){
   
     if(this.stepperclass2==="current")
    {
      this.stepperclass2="pending";
      this.formclass2="pending";
      this.stepperclass1="current";
      this.formclass1="current"
      this.previous=false;
    }
    else if(this.stepperclass3==="current")
    {
      this.stepperclass3="pending";
      this.formclass3="pending";
      this.stepperclass2="current";
      this.formclass2="current"
      
    }
    else if(this.stepperclass4==="current")
    {
      this.stepperclass4="pending";
      this.formclass4="pending";
      this.stepperclass3="current";
      this.formclass3="current"
      this.last=false;
      
    }
  }
}
