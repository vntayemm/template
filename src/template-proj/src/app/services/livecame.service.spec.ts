import { TestBed, inject } from '@angular/core/testing';

import { LivecameService } from './livecame.service';

describe('LivecameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivecameService]
    });
  });

  it('should be created', inject([LivecameService], (service: LivecameService) => {
    expect(service).toBeTruthy();
  }));
});
