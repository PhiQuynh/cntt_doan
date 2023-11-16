import { TestBed } from '@angular/core/testing';

import { CouncliService } from './councli.service';

describe('CouncliService', () => {
  let service: CouncliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouncliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
