const { API_ROOT } = require('./endpoints');

const headers = {
  'X-API-Key': process.env.BUNGIE_API_KEY,
};

module.exports = {
  headers,
  baseURL: API_ROOT,
};
