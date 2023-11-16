import { TestBed } from '@angular/core/testing';

import { MaterDetailService } from './mater-detail.service';

describe('MaterDetailService', () => {
  let service: MaterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
