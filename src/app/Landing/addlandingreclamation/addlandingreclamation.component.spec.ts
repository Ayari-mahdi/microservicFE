import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlandingreclamationComponent } from './addlandingreclamation.component';

describe('AddlandingreclamationComponent', () => {
  let component: AddlandingreclamationComponent;
  let fixture: ComponentFixture<AddlandingreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlandingreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlandingreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
