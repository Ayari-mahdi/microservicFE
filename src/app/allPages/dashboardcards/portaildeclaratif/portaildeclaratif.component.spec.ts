import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaildeclaratifComponent } from './portaildeclaratif.component';

describe('PortaildeclaratifComponent', () => {
  let component: PortaildeclaratifComponent;
  let fixture: ComponentFixture<PortaildeclaratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaildeclaratifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaildeclaratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
