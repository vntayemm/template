import { TestBed, inject } from '@angular/core/testing';

import { CryptletContainerService } from './cryptlet-container.service';

describe('CryptletContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptletContainerService]
    });
  });

  it('should be created', inject([CryptletContainerService], (service: CryptletContainerService) => {
    expect(service).toBeTruthy();
  }));
});
