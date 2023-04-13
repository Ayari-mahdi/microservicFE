import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageswrapperComponent } from './pageswrapper.component';

describe('PageswrapperComponent', () => {
  let component: PageswrapperComponent;
  let fixture: ComponentFixture<PageswrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageswrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageswrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
