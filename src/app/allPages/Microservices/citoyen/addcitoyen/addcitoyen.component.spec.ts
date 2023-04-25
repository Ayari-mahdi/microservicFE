import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcitoyenComponent } from './addcitoyen.component';

describe('AddcitoyenComponent', () => {
  let component: AddcitoyenComponent;
  let fixture: ComponentFixture<AddcitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
