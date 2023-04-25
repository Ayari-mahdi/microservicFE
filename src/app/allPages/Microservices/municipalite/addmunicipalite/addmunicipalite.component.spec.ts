import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmunicipaliteComponent } from './addmunicipalite.component';

describe('AddmunicipaliteComponent', () => {
  let component: AddmunicipaliteComponent;
  let fixture: ComponentFixture<AddmunicipaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmunicipaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmunicipaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
