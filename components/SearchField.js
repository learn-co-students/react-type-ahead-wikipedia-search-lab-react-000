'use strict'

const React = require('react');

class SearchField extends React.Component {
  render(){
    const {value, onChange} = this.props
    return(
      <input className="search-field" value={value} onChange={onChange}/>
    )
  }
}

module.exports = SearchField;
