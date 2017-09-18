const clientConfig = require('./clientConfig');
const {
  GROUP_SEARCH,
  GROUP_GET,
  GROUP_MEMBERS,
  GROUP_GET_BY_NAME,
} = require('./endpoints');
const axios = require('axios');
const { template } = require('lodash');

module.exports = {
  show(groupId) {
    return axios(Object.assign({
      method: 'GET',
      url: template(GROUP_GET)({ groupId }),
    }, clientConfig));
  },
  members(groupId, queryObject) {
    return axios(Object.assign({
      method: 'GET',
      url: template(GROUP_MEMBERS)({ groupId }),
      params: Object.assign({
        currentPage: 1,
      }, queryObject || {}),
    }, clientConfig));
  },
  search(queryObject) {
    return axios(Object.assign({
      method: 'POST',
      url: GROUP_SEARCH,
      data: Object.assign({
        currentPage: 1,
        groupType: 1,
      }, queryObject),
    }, clientConfig));
  },
  getByName(name) {
    return axios(Object.assign({
      method: 'GET',
      url: template(GROUP_GET_BY_NAME)({ groupName: name }),
    }, clientConfig));
  },
};
