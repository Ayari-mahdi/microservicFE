import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUESQVTComponent } from './quesqvt.component';

describe('QUESQVTComponent', () => {
  let component: QUESQVTComponent;
  let fixture: ComponentFixture<QUESQVTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QUESQVTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QUESQVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
