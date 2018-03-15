import { TestBed, inject } from '@angular/core/testing';

import { BlockchainGatewayService } from './blockchain-gateway.service';

describe('BlockchainGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainGatewayService]
    });
  });

  it('should be created', inject([BlockchainGatewayService], (service: BlockchainGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
