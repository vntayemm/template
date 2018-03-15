import { TestBed, inject } from '@angular/core/testing';

import { BitcoinPaymentService } from './bitcoin-payment.service';

describe('BitcoinPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinPaymentService]
    });
  });

  it('should be created', inject([BitcoinPaymentService], (service: BitcoinPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
