import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class GraphqlApiService {
  private baseUrl:string = 'http://localhost:9000/graphql';

  constructor(private httpClient:HttpClient) {
  }

  private static headers() {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    }
  }

  getQuery(query) {
    return this.httpClient.post(this.baseUrl, JSON.stringify({query}), GraphqlApiService.headers());
  }

  test(name) {
    return this.getQuery(`{ test(name: "${name}") }`);
  }
}
