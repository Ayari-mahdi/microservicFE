import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { municipalite } from 'src/app/Models/models';
import { MunicipaliteService } from 'src/app/serivces/municipalite/municipalite.service';

@Component({
  selector: 'app-municipalite',
  templateUrl: './municipalite.component.html',
  styleUrls: ['./municipalite.component.css']
})
export class MunicipaliteComponent implements OnInit {
municipalite:municipalite[]=[]
  constructor(private modalService : NgbModal,
    private munipservice: MunicipaliteService,) { }
totalnumber='0'
  ngOnInit(): void {
    console.log("we here")
    this.munipservice.getAll().subscribe({
      next:(data)=>{ 
         this.totalnumber=data.length.toString();
        console.log("data : ",data)
        this.municipalite=data;
       
      },
      error:(err)=>{console.log("err here",err)
      }
  });
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result:any) => {


    }, (reason:any) => {
    
    });
   }
   close(){
    this.modalService.dismissAll();
    this.ngOnInit()
   }
 
  delete(citID:any){
    this.munipservice.delete(citID).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.close()
      },
      error:(err)=>{console.log(err)
      }
  });
  }
}
