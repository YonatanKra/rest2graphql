import { TestBed, inject } from '@angular/core/testing';

import { ApolloApiService } from './apollo-api.service';

describe('ApolloApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloApiService]
    });
  });

  it('should be created', inject([ApolloApiService], (service: ApolloApiService) => {
    expect(service).toBeTruthy();
  }));
});
