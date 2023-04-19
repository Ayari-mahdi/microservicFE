import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animation/animations';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-personnalisable',
  templateUrl: './personnalisable.component.html',
  styleUrls: ['./personnalisable.component.css'],
  animations:[fade]
})
export class PersonnalisableComponent implements OnInit {
  closeResult='';
  constructor(
    private modalService : NgbModal,
    ) { }

  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('saved successfully');

    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}
