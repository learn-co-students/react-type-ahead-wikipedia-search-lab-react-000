'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    // TODO
    if (!resultStore.isOutdated(requested)){
      const newResults = data[1].map((title, i) => {
        return {title: title, description: data[2][i], link: data[3][i]}
      })
      resultStore.setState({results: newResults, updated: requested});
    }
  });
};

module.exports = { search };
