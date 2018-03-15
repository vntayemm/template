import { TestBed, inject } from '@angular/core/testing';

import { ReceivePaymentsService } from './receive-payments.service';

describe('ReceivePaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceivePaymentsService]
    });
  });

  it('should be created', inject([ReceivePaymentsService], (service: ReceivePaymentsService) => {
    expect(service).toBeTruthy();
  }));
});
