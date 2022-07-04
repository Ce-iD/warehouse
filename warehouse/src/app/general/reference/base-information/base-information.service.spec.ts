import { TestBed } from '@angular/core/testing';

import { BaseInformationService } from './base-information.service';

describe('BaseInformationService', () => {
  let service: BaseInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
