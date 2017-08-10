const requestIp = require('request-ip');

let clientMapper = {};

function addCount(req, url) {
    const ip = getClientIp(req);
    if (clientMapper[ip] === undefined) {
        clientMapper[ip] = {TOTAL: 0};
    }

    if (clientMapper[ip][url] === undefined) {
        clientMapper[ip][url] = 0;
    }

    clientMapper[ip][url]++;
    clientMapper[ip].TOTAL++;
}

function getClientIp(req) {
    return requestIp.getClientIp(req);
}

module.exports = {
    init: (app) => {
        app.use((req, res, next) => {
            addCount(req, req.url);
            console.log(JSON.stringify(clientMapper));
            next();
        });
    },
    get: (app) => {
        app.get('/count', (req, res) => {
            res.send(clientMapper[getClientIp(req)]);
        });
    }
};