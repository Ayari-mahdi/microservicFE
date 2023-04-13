import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavstatsService {
public sidenavstat:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
