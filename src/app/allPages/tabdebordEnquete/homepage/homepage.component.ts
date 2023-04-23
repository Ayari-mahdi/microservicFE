import { Component, Input, OnInit } from '@angular/core';
import { fade, fadefromleft, fadefromright, fadefromtop }  from 'src/app/animation/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations:[fade,fadefromleft,fadefromright,fadefromtop],
})
export class HomepageComponent implements OnInit {
  
  constructor() { }
  frontorback1=""
  frontorback2=""
  frontorback12=""
  frontorback22=""
  frontorback13=""
  frontorback23=""
  classtest=""
  classtest2=""
  classtest3=""
  clickMessage:any;
  ngOnInit(): void {
  }
 
  onshow(event:any)
  {
  console.log("clicked",event)
    if(event.target.id==1)
          {this.frontorback12=''
          this.frontorback22=''
          this.frontorback13=''
          this.frontorback23=''
          this.classtest2=''
          this.classtest3=''
          this.classtest=''
          if(this.frontorback1=='x')
          {this.frontorback1=''}
          else{
            this.frontorback1='x'
          }
        if(this.frontorback2=='y')
          {this.frontorback2=''
          
        }
          else{
            this.frontorback2='y'
           this.classtest='test'
          }
          }
    if(event.target.id==2)
        {this.frontorback1=''
        this.frontorback2=''
        this.frontorback13=''
          this.frontorback23=''
          this.classtest=''
          this.classtest3=''
        if(this.frontorback12=='x')
        {this.frontorback12=''
        }
        else{
          this.frontorback12='x'
        }
       if(this.frontorback22=='y')
        {this.frontorback22=''
      this.classtest2=''
      }
        else{
          this.frontorback22='y'
          this.classtest2='test'
        }

        }
    if(event.target.id==3)
        {
          this.frontorback1=''
          this.frontorback2=''
          this.frontorback12=''
          this.frontorback22=''
          this.classtest=''
          this.classtest2=''
          if(this.frontorback13=='x')
          {this.frontorback13=''
          }
          else{
            this.frontorback13='x'
          }
         if(this.frontorback23=='y')
          {this.frontorback23=''
        this.classtest3=''
        }
          else{
            this.frontorback23='y'
          this.classtest3='test'
          }
        }
  }

}

