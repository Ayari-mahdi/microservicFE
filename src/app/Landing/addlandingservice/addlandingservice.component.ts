import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addlandingservice',
  templateUrl: './addlandingservice.component.html',
  styleUrls: ['./addlandingservice.component.css']
})
export class AddlandingserviceComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<string>();
  constructor() { }
spinner=false
  ngOnInit(): void {
  }
  closemodal() {
    this.closeEvent.emit();
  }
  submit(){

  }
}
