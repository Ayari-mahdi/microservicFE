import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalisableComponent } from './personnalisable.component';

describe('PersonnalisableComponent', () => {
  let component: PersonnalisableComponent;
  let fixture: ComponentFixture<PersonnalisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
