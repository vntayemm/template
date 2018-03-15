import { TestBed, inject } from '@angular/core/testing';

import { CryptletService } from './cryptlet.service';

describe('CryptletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptletService]
    });
  });

  it('should be created', inject([CryptletService], (service: CryptletService) => {
    expect(service).toBeTruthy();
  }));
});
