import { TestBed } from '@angular/core/testing';

import { GetmovieService } from './getmovie.service';

describe('GetmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmovieService = TestBed.get(GetmovieService);
    expect(service).toBeTruthy();
  });
});
