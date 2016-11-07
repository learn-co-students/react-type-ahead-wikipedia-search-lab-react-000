'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchField = require('./SearchField');
const SearchResults = require('./SearchResults');

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount(){
    this.removeListener = resultStore.addListener(state => this.setState(state))
    this.setState(resultStore.getState());
  }
  
  componentWillUnmount(){
    this.removeListener();
  }
  
  render() {
    return (
      <div>
        <h2>Autocomplete</h2>
      </div>
    );
  }
}

module.exports = Autocomplete;
