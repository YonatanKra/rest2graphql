import gql from 'graphql-tag';

export const testQuery = gql`
query Test($name:String){
  test(name: $name)
}`;
