const assets = require('./assets');
const auth = require('./auth');
const apiV1 = require('./api/v1');

module.exports = [
  ...assets,
  ...auth,
  ...apiV1,
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.file('index.html');
    },
  },
];
