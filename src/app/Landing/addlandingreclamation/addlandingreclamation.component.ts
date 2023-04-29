import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { municipalite, reclamation } from 'src/app/Models/models';
import { MunicipaliteService } from 'src/app/serivces/municipalite/municipalite.service';
import { ReclamationService } from 'src/app/serivces/reclamation/reclamation.service';

@Component({
  selector: 'app-addlandingreclamation',
  templateUrl: './addlandingreclamation.component.html',
  styleUrls: ['./addlandingreclamation.component.css']
})
export class AddlandingreclamationComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<string>();
 rec:reclamation;
 municipalites:municipalite[]=[]
  constructor(
private recservice:ReclamationService,
private muniservice:MunicipaliteService

  ) {this.rec=new reclamation }
  spinner=false
  ngOnInit(): void {
    this.muniservice.getAll().subscribe({
      next:(data)=>{
     console.log(data)
       this.municipalites=data
      },
      error:(error)=>{
        console.log(error)
      }
    })
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
