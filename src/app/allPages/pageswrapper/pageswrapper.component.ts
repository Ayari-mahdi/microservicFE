import { Component, OnInit } from '@angular/core';
import { SidenavstatsService } from 'src/app/serivces/sidenavstats.service';

@Component({
  selector: 'app-pageswrapper',
  templateUrl: './pageswrapper.component.html',
  styleUrls: ['./pageswrapper.component.css']
})
export class PageswrapperComponent implements OnInit {

  constructor(
    public sidenavstatsService: SidenavstatsService
  ) { }

  ngOnInit(): void {
    
  }

}
