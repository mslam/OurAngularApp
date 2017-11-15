import { TestBed, inject } from '@angular/core/testing';

import { SignupuserService } from './signupuser.service';

describe('SignupuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupuserService]
    });
  });

  it('should be created', inject([SignupuserService], (service: SignupuserService) => {
    expect(service).toBeTruthy();
  }));
});
