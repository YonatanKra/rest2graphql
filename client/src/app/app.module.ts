import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {services} from './services';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {LinksStatusComponent} from './components/links-status/links-status.component';
import {CheckGraphqlComponent} from './components/check-graphql/check-graphql.component';

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
    HttpClientModule
  ],
  providers: services,
  bootstrap: [AppComponent]
})
export class AppModule {
}
