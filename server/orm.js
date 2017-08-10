let db = require('./db.json');

module.exports = {users, jobs};

function users({id}) {
    if (id) return db.users[id];
    return db.users;
}

function jobs({id}) {
    if (id) return db.jobs[id];
    return db.jobs;
}