import { TestBed, inject } from '@angular/core/testing';

import { CryptoDelegateService } from './crypto-delegate.service';

describe('CryptoDelegateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoDelegateService]
    });
  });

  it('should be created', inject([CryptoDelegateService], (service: CryptoDelegateService) => {
    expect(service).toBeTruthy();
  }));
});
