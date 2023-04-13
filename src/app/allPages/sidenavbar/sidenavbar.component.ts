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
  sidenavstyle:string="";
  fleshactive:string=""
  ngOnInit(): void {
  }

expand(x :any){
if(x===1){
  this.style2="";this.style3="";this.style4="";
  if(this.style1==="")
  {this.style1="show here";}
  else{
     this.style1=""
  }

}
else if (x===2){
 this.style1="";this.style3="";this.style4="";
  if(this.style2==="")
  {this.style2="show here";}
  else{
     this.style2=""
  }

}
else if (x ===3){
  this.style2="";this.style1="";this.style4=""
  if(this.style3==="")
  {this.style3="show here";}
  else{
     this.style3=""
  }
}
else if (x ===4){
  this.style2="";this.style1="";this.style3=""
  if(this.style4==="")
  {this.style4="show here";}
  else{
     this.style4=""
  }
}
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
