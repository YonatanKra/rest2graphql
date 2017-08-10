let orm = require('./orm');

module.exports = {
  init: function (app) {
      app.get('/api/users', getAllUsers);
      app.get('/api/users/:id', getUserById);
      app.get('/api/jobs', getAllJobs);
      app.get('/api/jobs/:id', getJobById);
  }
};

function getAllUsers(req, res) {
    res.send(values(orm.users({})));
}

function getUserById(req, res) {
    let id = req.params.id;
    res.send(orm.users({id}));
}

function getAllJobs(req, res) {
    res.send(values(orm.jobs({})));
}

function getJobById(req, res) {
    let id = req.params.id;
    res.send(orm.jobs({id}));
}




// polyfill for Object.values
function values(object) {
    return Object.keys(object).map(key => object[key]);
}