import { TestBed } from '@angular/core/testing';

import { SidenavstatsService } from './sidenavstats.service';

describe('SidenavstatsService', () => {
  let service: SidenavstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
