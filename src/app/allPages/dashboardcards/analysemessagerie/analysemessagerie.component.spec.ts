import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysemessagerieComponent } from './analysemessagerie.component';

describe('AnalysemessagerieComponent', () => {
  let component: AnalysemessagerieComponent;
  let fixture: ComponentFixture<AnalysemessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysemessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysemessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
