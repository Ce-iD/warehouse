import { TestBed } from '@angular/core/testing';

import { WareService } from './ware.service';

describe('WareService', () => {
  let service: WareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
