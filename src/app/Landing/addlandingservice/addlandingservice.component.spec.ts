import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlandingserviceComponent } from './addlandingservice.component';

describe('AddlandingserviceComponent', () => {
  let component: AddlandingserviceComponent;
  let fixture: ComponentFixture<AddlandingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlandingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlandingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
