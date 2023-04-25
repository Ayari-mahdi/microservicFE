import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepagecard',
  templateUrl: './homepagecard.component.html',
  styleUrls: ['./homepagecard.component.css']
})
export class HomepagecardComponent implements OnInit {
  @Input() title=''
  @Input() link=''
  @Input() link1=''
  @Input() link2=''
  @Input() icon=''
  frontorback1=""
  frontorback2=""
  frontorback12=""
  frontorback22=""
  frontorback13=""
  frontorback23=""
  classtest=""
  classtest2=""
  classtest3=""
  closeResult=''
  clickMessage:any;
  constructor(private modalService : NgbModal,) { }
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
  ngOnInit(): void {
  }
  onshow(event:any){
    this.classtest3=''
    if(this.frontorback12=='x')
    {this.frontorback12=''
    }
    else{
      this.frontorback12='x'
    }
   if(this.frontorback22=='y')
    {this.frontorback22=''
  this.classtest2=''
  }
    else{
      this.frontorback22='y'
      this.classtest2='test'
    }
  }
}
