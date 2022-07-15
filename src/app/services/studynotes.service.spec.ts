import { TestBed } from '@angular/core/testing';

import { StudynotesService } from './studynotes.service';

describe('StudynotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudynotesService = TestBed.get(StudynotesService);
    expect(service).toBeTruthy();
  });
});
