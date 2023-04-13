import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnqueteQVTComponent } from './add-enquete-qvt.component';

describe('AddEnqueteQVTComponent', () => {
  let component: AddEnqueteQVTComponent;
  let fixture: ComponentFixture<AddEnqueteQVTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnqueteQVTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnqueteQVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
