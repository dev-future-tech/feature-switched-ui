import { TestBed } from '@angular/core/testing';

import { FlagrService } from './flagr.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FlagrService', () => {
  let service: FlagrService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlagrService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FlagrService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
