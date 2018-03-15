import { TestBed, inject } from '@angular/core/testing';

import { BlockchainWalletService } from './blockchain-wallet.service';

describe('BlockchainWalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainWalletService]
    });
  });

  it('should be created', inject([BlockchainWalletService], (service: BlockchainWalletService) => {
    expect(service).toBeTruthy();
  }));
});
