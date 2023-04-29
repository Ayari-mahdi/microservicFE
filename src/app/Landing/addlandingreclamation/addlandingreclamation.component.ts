import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { reclamation } from 'src/app/Models/models';
import { ReclamationService } from 'src/app/serivces/reclamation/reclamation.service';

@Component({
  selector: 'app-addlandingreclamation',
  templateUrl: './addlandingreclamation.component.html',
  styleUrls: ['./addlandingreclamation.component.css']
})
export class AddlandingreclamationComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<string>();
 rec:reclamation;
  constructor(
private recservice:ReclamationService

  ) {this.rec=new reclamation }
  spinner=false
  ngOnInit(): void {
  }
  closemodal() {
    this.closeEvent.emit();
  }
  submit(){
    console.log(this.rec)
  this.spinner=true
  this.recservice.addReclamation(this.rec).subscribe({
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
