import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelesiergrist',
  templateUrl: './modelesiergrist.component.html',
  styleUrls: ['./modelesiergrist.component.css']
})
export class ModelesiergristComponent implements OnInit {

  constructor() { }
frontorback1=""
frontorback2=""
  ngOnInit(): void {

  }
changeclass(){
  if(this.frontorback1=='x')
  {this.frontorback1=''}
  else{
    this.frontorback1='x'
  }
 if(this.frontorback2=='y')
  {this.frontorback2=''}
  else{
    this.frontorback2='y'
  }
}
}
