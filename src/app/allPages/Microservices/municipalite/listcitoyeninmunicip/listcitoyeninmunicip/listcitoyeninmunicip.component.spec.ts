import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcitoyeninmunicipComponent } from './listcitoyeninmunicip.component';

describe('ListcitoyeninmunicipComponent', () => {
  let component: ListcitoyeninmunicipComponent;
  let fixture: ComponentFixture<ListcitoyeninmunicipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcitoyeninmunicipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcitoyeninmunicipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
