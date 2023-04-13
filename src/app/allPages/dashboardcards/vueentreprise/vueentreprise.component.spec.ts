import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueentrepriseComponent } from './vueentreprise.component';

describe('VueentrepriseComponent', () => {
  let component: VueentrepriseComponent;
  let fixture: ComponentFixture<VueentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
