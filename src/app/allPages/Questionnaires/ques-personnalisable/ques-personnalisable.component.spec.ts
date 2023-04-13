import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesPersonnalisableComponent } from './ques-personnalisable.component';

describe('QuesPersonnalisableComponent', () => {
  let component: QuesPersonnalisableComponent;
  let fixture: ComponentFixture<QuesPersonnalisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesPersonnalisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesPersonnalisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
