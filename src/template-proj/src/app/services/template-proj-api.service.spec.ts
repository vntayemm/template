import { TestBed, inject } from '@angular/core/testing';

import { TemplateProjApiService } from './template-proj-api.service';

describe('TemplateProjApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateProjApiService]
    });
  });

  it('should be created', inject([TemplateProjApiService], (service: TemplateProjApiService) => {
    expect(service).toBeTruthy();
  }));
});
