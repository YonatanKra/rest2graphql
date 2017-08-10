const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type Query {
        test(name:String):String!
    }
`);
