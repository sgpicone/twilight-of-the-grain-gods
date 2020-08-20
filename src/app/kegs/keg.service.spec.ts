import { TestBed } from '@angular/core/testing';

import { KegService } from './keg.service';

describe('KegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KegService = TestBed.get(KegService);
    expect(service).toBeTruthy();
  });
});
