import { TestBed } from '@angular/core/testing';

import { CaserviceService } from './caservice.service';

describe('CaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaserviceService = TestBed.get(CaserviceService);
    expect(service).toBeTruthy();
  });
});
