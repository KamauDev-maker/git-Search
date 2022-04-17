import { TestBed } from '@angular/core/testing';

import { GituserServiceService } from './gituser-service.service';

describe('GituserServiceService', () => {
  let service: GituserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
