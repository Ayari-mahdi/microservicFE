import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { service } from 'src/app/Models/models';
import { ServiceService } from 'src/app/serivces/serivce/service.service';

@Component({
  selector: 'app-addlandingservice',
  templateUrl: './addlandingservice.component.html',
  styleUrls: ['./addlandingservice.component.css']
})
export class AddlandingserviceComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<string>();
 service:service;
  constructor(
private Service:ServiceService

  ) {this.service=new service }
  spinner=false
  ngOnInit(): void {
  }
  closemodal() {
    this.closeEvent.emit();
  }
  submit(){
    console.log(this.service)
  this.spinner=true
  this.Service.addservice(this.service).subscribe({
  next:(data)=>{
    this.spinner=false
    this.closemodal()
  },
  error:(error)=>{
    console.log(error)
    this.ngOnInit();this.spinner=false
  }
  });
  }
}
