import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { citoyen } from 'src/app/Models/models';
import { MunicipaliteService } from 'src/app/serivces/municipalite/municipalite.service';

@Component({
  selector: 'app-listcitoyeninmunicip',
  templateUrl: './listcitoyeninmunicip.component.html',
  styleUrls: ['./listcitoyeninmunicip.component.css']
})
export class ListcitoyeninmunicipComponent implements OnInit {
  @Input() municipnom: string |undefined;
data:citoyen[]=[]
  @Input() updateoradd=''
  @Output() closeEvent = new EventEmitter<string>();
  constructor(  private muniservice :MunicipaliteService) { }
  closemodal() {
    this.closeEvent.emit();
  }
  ngOnInit(): void {
    this.muniservice.getcitbyname(this.municipnom).subscribe({
      next:(data)=>{ 
        console.log(data)
             this.data=data
      },
      error:(err)=>{console.log("err here",err)
      
      },
  })
  }

}
