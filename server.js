const path = require('path');
const hapi = require('hapi');
const bell = require('bell');
const mongoose = require('mongoose');
const inert = require('inert');

const routes = require('./routes');
const { good } = require('./plugins');

mongoose.connect('mongodb://mongo/dcw');

const server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public'),
      },
    },
  },
});

module.exports = function start() {
  server.connection({ port: 3000, host: '0.0.0.0' });

  Promise.all([
    server.register(good),
    server.register(inert),
    server.register(bell),
  ]).then(() => {
    server.auth.strategy('bungie', 'bell', {
      provider: {
        protocol: 'oauth2',
        auth: 'https://www.bungie.net/en/OAuth/Authorize',
        token: 'https://www.bungie.net/Platform/App/OAuth/token/',
      },
      password: "sadfasdasdasdasdsadasdfdsgfdsgdsfgdsfgdsgdsgfdfgdsgfdsfgdsfgdsgdsfg",
      clientId: process.env.BUNGIE_CLIENT_ID,
      clientSecret: process.env.BUNGIE_API_KEY,
      location: 'http://localhost:3000/auth/callback',
    });

    server.route(routes);
    server.start();
  }).catch(console.log);
};
