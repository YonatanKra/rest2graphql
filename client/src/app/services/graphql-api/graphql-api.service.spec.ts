import { TestBed, inject } from '@angular/core/testing';

import { GraphqlApiService } from './graphql-api.service';

describe('GraphqlApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlApiService]
    });
  });

  it('should be created', inject([GraphqlApiService], (service: GraphqlApiService) => {
    expect(service).toBeTruthy();
  }));
});
