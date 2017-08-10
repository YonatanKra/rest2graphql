const express = require('express');
const cors = require('cors');
const api = require('./api');

let app = express();
app.use(cors());

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
console.log('http://localhost:9000');
app.listen(9000);