import { TestBed } from '@angular/core/testing';

import { JapneseService } from './japnese.service';

describe('JapneseService', () => {
  let service: JapneseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JapneseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
