import { TestBed } from '@angular/core/testing';

import { DoulaClientService } from './doula-client.service';

describe('DoulaClientService', () => {
  let service: DoulaClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoulaClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
