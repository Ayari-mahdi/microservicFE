import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardcard',
  templateUrl: './dashboardcard.component.html',
  styleUrls: ['./dashboardcard.component.css']
})
export class DashboardcardComponent implements OnInit {
@Input() title=''
@Input() logo=''
  constructor() { }
  ngOnInit(): void {
  }

}
