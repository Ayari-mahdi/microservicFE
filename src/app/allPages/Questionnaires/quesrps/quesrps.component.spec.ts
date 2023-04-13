import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUESRPSComponent } from './quesrps.component';

describe('QUESRPSComponent', () => {
  let component: QUESRPSComponent;
  let fixture: ComponentFixture<QUESRPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QUESRPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QUESRPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
