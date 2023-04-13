import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetepersonnalisableComponent } from './enquetepersonnalisable.component';

describe('EnquetepersonnalisableComponent', () => {
  let component: EnquetepersonnalisableComponent;
  let fixture: ComponentFixture<EnquetepersonnalisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetepersonnalisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquetepersonnalisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
