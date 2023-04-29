import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { reclamation } from 'src/app/Models/models';
import { ReclamationService } from 'src/app/serivces/reclamation/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor( private modalService : NgbModal,private recservice:ReclamationService) { }
  recs:reclamation []=[]
totalnumber='0'
  ngOnInit(): void {
    this.recservice.getAll().subscribe({
      next:(data)=>{ 
         this.totalnumber=data.length.toString();
        console.log("data : ",data)
        this.recs=data;
       
      },
      error:(err)=>{console.log("err here",err)
      }
  });
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      console.log('saved successfully');

    }, (reason:any) => {
      console.log(reason)
     ;
    });
   }
   close(){
    this.modalService.dismissAll();
    this.ngOnInit()
   }
   delete(serviceid:any){
    this.recservice.delete(serviceid).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.close()
      },
      error:(err)=>{console.log(err)
      }
  });
  }

}
