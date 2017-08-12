import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';

import {AppComponent} from './app.component';
import {services} from './services';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {LinksStatusComponent} from './components/links-status/links-status.component';
import {CheckGraphqlComponent} from './components/check-graphql/check-graphql.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9000/graphql'
  })
});

export function provideClient():ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    LinksStatusComponent,
    CheckGraphqlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule {
}
