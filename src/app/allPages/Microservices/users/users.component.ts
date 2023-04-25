import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/Models/models';
import { UserserviceService } from 'src/app/serivces/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: user[] = [];
  closeResult='';
 totalnumber='';
  constructor( private modalService : NgbModal,
    private userservice: UserserviceService,
    ) { }

  ngOnInit(): void {
    console.log("we here")
    this.userservice.getAll().subscribe({
      next:(data)=>{ 
         this.totalnumber=data.length.toString();
        console.log("data : ",data)
        this.users=data;
       
      },
      error:(err)=>{console.log("err here",err)
      }
  });
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('saved successfully');

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
   close(){
    this.modalService.dismissAll();
    this.ngOnInit()
   }
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    else {
      return `with: ${reason}`;
    }
  }
  delete(userid:any){
    this.userservice.delete(userid).subscribe({
      next:(data)=>{ 
        console.log("data : ",data)
        this.close()
      },
      error:(err)=>{console.log(err)
      }
  });
  }
 

}
