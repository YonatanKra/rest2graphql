const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const api = require('./api');
const entriesCounter = require('./entries-counter');
const schema = require('./graphql/schema');
const root = require('./graphql/root');

// init
let app = express();
app.use(cors());
entriesCounter.init(app);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// getters
app.get('/', (req, res) => {
    res.send('Welcome To REST 2 GRAPHQL');
});
app.get('/api', (req, res) => {
    res.send('<b>/api/users</b> - get all users data<br>' +
        '<b>/api/users/:id</b> - get user data by id<br>' +
        '<b>/api/jobs</b> - get all jobs data<br>' +
        '<b>/api/jobs/:id</b> - get job data by id<br>');
});
api.init(app);
entriesCounter.get(app);

// run
console.log('http://localhost:9000');
app.listen(9000);