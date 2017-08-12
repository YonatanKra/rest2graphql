import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {testQuery} from '../../../grqphql/test.graphql';
import 'rxjs/add/operator/map';

@Injectable()
export class ApolloApiService {
  constructor(private apollo:Apollo) {
  }

  test(name:string) {
    return this.apollo.query<any>({
      query: testQuery, variables: {name}
    }).map(({data}) => data.test);
  }
}
