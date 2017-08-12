# Rest 2 GraphQL

This project demonstrate a simple steps to add the [graphql](http://graphql.org/) to a restAPI based project at both client and server sides.

### Code
It have few branches to demonstrate the way from rest based to graphql based communiation
* master
 * a rest api app
 * (hopefully) dependencies for all steps of project at package.json for easy starter
* step-1_graphql-server
 * Configuration and end point to communicate with the server at graphql style
 * **It not include the rest api as graphql schema**
* step-2_graphql-client
   * New service at client (GraphqlApiService) to communicate with the `test` query at server with grqphql
   * **Like the server, it not include the rest api as graphql schema**
* step-2.1_apollo-client
   * New service at client (ApolloApiService) to communicate with the `test` query at server with grqphql.
     This service was build with same inner API so the components that use one of the services would use same API with different communication platform.
   * There is ability to choose (at CheckGraphqlComponent) which communication platform to use.
        * simple Graphql.
        * apollo client.

        Both the platforms accesses to the same server but with different API.
   * **Like the server, it not include the rest api as graphql schema**

### Client

Run `npm run client` for a dev client server. It will open `http://localhost:4200/` at your browser.

There is a button on the client screen that show which endpoints the client use until last check,
this idea was build to show how many calls to server we could save by using graphql idea

### Server

Run `npm run server` to run the node express based server.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.
