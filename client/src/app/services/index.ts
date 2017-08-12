import {RestApiService} from './rest-api/rest-api.service';
import {GraphqlApiService} from './graphql-api/graphql-api.service';
import {ApolloApiService} from './apollo-api/apollo-api.service';

export const services = [
  RestApiService,
  GraphqlApiService,
  ApolloApiService
];
