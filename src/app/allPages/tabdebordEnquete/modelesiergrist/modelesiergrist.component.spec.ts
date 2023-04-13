import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesiergristComponent } from './modelesiergrist.component';

describe('ModelesiergristComponent', () => {
  let component: ModelesiergristComponent;
  let fixture: ComponentFixture<ModelesiergristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelesiergristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelesiergristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
