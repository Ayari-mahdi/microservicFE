import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnquetePersoComponent } from './add-enquete-perso.component';

describe('AddEnquetePersoComponent', () => {
  let component: AddEnquetePersoComponent;
  let fixture: ComponentFixture<AddEnquetePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnquetePersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnquetePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
