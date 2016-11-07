'use strict'

const React = require('react');

class SearchResults extends React.Component {
  render(){
    const { results } = this.props;
    return(
      <ul className="search-results">
        {results.map(r => {
          return (
            <li>
              <a href={r.link}>{r.title}</a>
              <p>
                {r.description}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = SearchResults;
