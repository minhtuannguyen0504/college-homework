import { TestBed } from '@angular/core/testing';

import { UserWithNgrxService } from './user-with-ngrx.service';

describe('UserWithNgrxService', () => {
  let service: UserWithNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
