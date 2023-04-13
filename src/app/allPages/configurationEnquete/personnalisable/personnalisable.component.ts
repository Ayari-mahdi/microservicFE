import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animation/animations';

@Component({
  selector: 'app-personnalisable',
  templateUrl: './personnalisable.component.html',
  styleUrls: ['./personnalisable.component.css'],
  animations:[fade]
})
export class PersonnalisableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
