import { TestBed } from '@angular/core/testing';

import { UserFilterService } from './user-filter.service';

describe('UserFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFilterService = TestBed.get(UserFilterService);
    expect(service).toBeTruthy();
  });
});
