import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { citoyen } from 'src/app/Models/models';
import { CitoyenService } from 'src/app/serivces/citoyen/citoyen.service';

@Component({
  selector: 'app-citoyen',
  templateUrl: './citoyen.component.html',
  styleUrls: ['./citoyen.component.css']
})
export class CitoyenComponent implements OnInit {
  cit: citoyen[] = [];
  totalnumber='0';
  constructor( private modalService : NgbModal,
    private citoyen: CitoyenService,
    ) { }

  ngOnInit(): void {
    console.log("we here")
    this.citoyen.getAll().subscribe({
      next:(data)=>{ 
         this.totalnumber=data.length.toString();
        console.log("data : ",data)
        this.cit=data;
       
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
    this.citoyen.delete(citID).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.close()
      },
      error:(err)=>{console.log(err)
      }
  });
  }
 
  
}
