import { TestBed } from '@angular/core/testing';

import { Change2Interceptor } from './change2.interceptor';

describe('Change2Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Change2Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Change2Interceptor = TestBed.inject(Change2Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
