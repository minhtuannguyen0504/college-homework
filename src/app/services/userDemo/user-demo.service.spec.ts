import { TestBed } from '@angular/core/testing';
import { UserDemoService } from './user-demo.service';

describe('UserDemoService', () => {
  let service: UserDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
