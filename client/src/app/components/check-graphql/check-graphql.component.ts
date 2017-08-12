import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GraphqlApiService} from '../../services/graphql-api/graphql-api.service';
import {ApolloApiService} from '../../services/apollo-api/apollo-api.service';

declare type Mode = 'graphql' | 'apollo';

@Component({
  selector: 'app-check-graphql',
  templateUrl: './check-graphql.component.html'
})
export class CheckGraphqlComponent {
  result:Observable<string>;
  mode:Mode;

  constructor(private graphqlApiService:GraphqlApiService, private apolloApiService:ApolloApiService) {
    this.mode = 'graphql';
  }

  setMode(mode:Mode) {
    this.mode = mode;
  }

  check(name) {
    if (this.mode === 'graphql') {
      this.result = this.graphqlApiService.test(name);
    }
    else {
      this.result = this.apolloApiService.test(name);
    }
  }
}
