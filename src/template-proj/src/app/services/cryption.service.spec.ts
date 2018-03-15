import { TestBed, inject } from '@angular/core/testing';

import { CryptionService } from './cryption.service';

describe('CryptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptionService]
    });
  });

  it('should be created', inject([CryptionService], (service: CryptionService) => {
    expect(service).toBeTruthy();
  }));
});
