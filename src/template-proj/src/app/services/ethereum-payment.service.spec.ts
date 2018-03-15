import { TestBed, inject } from '@angular/core/testing';

import { EthereumPaymentService } from './ethereum-payment.service';

describe('EthereumPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthereumPaymentService]
    });
  });

  it('should be created', inject([EthereumPaymentService], (service: EthereumPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
