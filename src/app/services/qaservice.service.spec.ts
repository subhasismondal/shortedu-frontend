import { TestBed } from '@angular/core/testing';

import { QaserviceService } from './qaservice.service';

describe('QaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QaserviceService = TestBed.get(QaserviceService);
    expect(service).toBeTruthy();
  });
});
