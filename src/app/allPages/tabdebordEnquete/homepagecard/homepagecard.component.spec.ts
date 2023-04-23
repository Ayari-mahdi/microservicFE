import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecardComponent } from './homepagecard.component';

describe('HomepagecardComponent', () => {
  let component: HomepagecardComponent;
  let fixture: ComponentFixture<HomepagecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
