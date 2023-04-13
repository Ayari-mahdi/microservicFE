import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animation/animations';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css'],
  animations:[fade]
})
export class RPSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
