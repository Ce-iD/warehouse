import { TestBed } from '@angular/core/testing';

import { WarehouseResponsibleService } from './warehouse-responsible.service';

describe('WarehouseResponsibleService', () => {
  let service: WarehouseResponsibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseResponsibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
