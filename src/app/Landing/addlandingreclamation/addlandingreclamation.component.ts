import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addlandingreclamation',
  templateUrl: './addlandingreclamation.component.html',
  styleUrls: ['./addlandingreclamation.component.css']
})
export class AddlandingreclamationComponent implements OnInit {
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
