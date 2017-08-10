import {Component} from '@angular/core';
import {GraphqlApiService} from '../../services/graphql-api/graphql-api.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-check-graphql',
  templateUrl: './check-graphql.component.html'
})
export class CheckGraphqlComponent {
  result:Observable<string>;

  constructor(private graphqlApiService:GraphqlApiService) {
  }

  check(name) {
    this.result = this.graphqlApiService.test(name);
  }

}
