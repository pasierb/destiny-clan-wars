const clans = require('./clans');
const axios = require('axios');
const clientConfig = require('./clientConfig');

module.exports = {
  raw(queryObject) {
    return axios(Object.assign({}, clientConfig, queryObject));
  },
  clans,
};
