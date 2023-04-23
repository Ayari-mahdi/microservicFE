import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepagecard',
  templateUrl: './homepagecard.component.html',
  styleUrls: ['./homepagecard.component.css']
})
export class HomepagecardComponent implements OnInit {
  @Input() title=''
  @Input() link=''
  @Input() link1=''
  @Input() link2=''
  @Input() icon=''
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
  constructor() { }

  ngOnInit(): void {
  }
  onshow(event:any){
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
}
