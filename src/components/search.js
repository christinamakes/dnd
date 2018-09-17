import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromAPI} from '../actions/apiActions'
import { Link } from "react-router-dom"

class DefaultSearch extends React.Component {

  render () {
    let searchResults;
    if (this.props.results) {
      searchResults = this.props.results.map((result, index) => 
        <div key={index}>
          <Link to={{ pathname: `/card/${result.name}`, state: { url: `${result.url}`} }}>{result.name}</Link>
        </div>
      )
    
    }
  
  return (
    <div>
    <Link to={`/`}>Home</Link>
    <Link to={`/generate`}>Generate Magic Item</Link>
    <Link to={`/generate`}>Generate Random Table</Link>    
    {searchResults}

    <p>
      <button onClick={() => this.props.dispatch(getResultsFromAPI())}>
        Get spells
      </button>
    </p>
  </div>
  )}
}

const mapStateToProps = (state) => ({
  results: state.api.results
})

export default connect(mapStateToProps)(DefaultSearch)
