import { TestBed } from '@angular/core/testing';

import { CampaignModelService } from './campaign-model.service';

describe('CampaignModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignModelService = TestBed.get(CampaignModelService);
    expect(service).toBeTruthy();
  });
});
