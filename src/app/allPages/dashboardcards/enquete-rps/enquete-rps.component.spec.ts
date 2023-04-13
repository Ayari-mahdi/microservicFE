import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteRPSComponent } from './enquete-rps.component';

describe('EnqueteRPSComponent', () => {
  let component: EnqueteRPSComponent;
  let fixture: ComponentFixture<EnqueteRPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqueteRPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteRPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
