import { TestBed } from '@angular/core/testing';

import { ContactResolver } from './contact-resolver.service';

describe('ContactResolver', () => {
  let resolver: ContactResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContactResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
