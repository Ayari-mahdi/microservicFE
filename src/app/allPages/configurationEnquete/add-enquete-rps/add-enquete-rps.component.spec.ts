import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnqueteRPSComponent } from './add-enquete-rps.component';

describe('AddEnqueteRPSComponent', () => {
  let component: AddEnqueteRPSComponent;
  let fixture: ComponentFixture<AddEnqueteRPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnqueteRPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnqueteRPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
