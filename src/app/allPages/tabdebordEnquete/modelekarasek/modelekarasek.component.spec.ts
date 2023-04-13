import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelekarasekComponent } from './modelekarasek.component';

describe('ModelekarasekComponent', () => {
  let component: ModelekarasekComponent;
  let fixture: ComponentFixture<ModelekarasekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelekarasekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelekarasekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
