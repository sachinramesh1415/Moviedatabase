import { TestBed } from '@angular/core/testing';

import { GetmoviedetailsService } from './getmoviedetails.service';

describe('GetmoviedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmoviedetailsService = TestBed.get(GetmoviedetailsService);
    expect(service).toBeTruthy();
  });
});
