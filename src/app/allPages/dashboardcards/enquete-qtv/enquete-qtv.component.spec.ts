import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteQTVComponent } from './enquete-qtv.component';

describe('EnqueteQTVComponent', () => {
  let component: EnqueteQTVComponent;
  let fixture: ComponentFixture<EnqueteQTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqueteQTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteQTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
