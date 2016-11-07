'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    // TODO
    debugger;
    if (!resultStore.isOutdated(data.date)){
      resultStore.setState(data);
    }
  });
};

module.exports = { search };
