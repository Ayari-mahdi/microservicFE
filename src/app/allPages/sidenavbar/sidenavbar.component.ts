import { Component, OnInit } from '@angular/core';
import { fade, fadefromleft } from 'src/app/animation/animations';
import { SidenavstatsService } from 'src/app/serivces/sidenavstats.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
  animations:[fade,fadefromleft]
})
export class SidenavbarComponent implements OnInit {
  constructor(
    public sidenavstatsService: SidenavstatsService
  ) { }
  style1:string="";
  style2:string="";
  style3:string="";
  style4:string="";
  style5:string=""
  sidenavstyle:string="";
  fleshactive:string=""
  ngOnInit(): void {
  }

expand(x :any){

}
changesidenav(){
  if(this.sidenavstyle==="")
  {this.sidenavstyle="sidenavclass";
 this.fleshactive="active"
 this.sidenavstatsService.sidenavstat.next(true)
}
  else
  {this.sidenavstyle=""
this.fleshactive=""
this.sidenavstatsService.sidenavstat.next(false)
}

}
}
