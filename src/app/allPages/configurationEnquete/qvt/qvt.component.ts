import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animation/animations';

@Component({
  selector: 'app-qvt',
  templateUrl: './qvt.component.html',
  styleUrls: ['./qvt.component.css'],
  animations:[fade]
})
export class QVTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
