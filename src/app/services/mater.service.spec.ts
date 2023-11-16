import { TestBed } from '@angular/core/testing';

import { MaterService } from './mater.service';

describe('MaterService', () => {
  let service: MaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
