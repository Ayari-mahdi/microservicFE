import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { service } from 'src/app/Models/models';
import { ServiceService } from 'src/app/serivces/serivce/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private modalService : NgbModal,private Service:ServiceService) { }
  services:service []=[]
totalnumber='0'
  ngOnInit(): void {
    this.Service.getAll().subscribe({
      next:(data)=>{ 
         this.totalnumber=data.length.toString();
        console.log("data : ",data)
        this.services=data;
       
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
    this.Service.delete(serviceid).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.close()
      },
      error:(err)=>{console.log(err)
      }
  });
  }
}
