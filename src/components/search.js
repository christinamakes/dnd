import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromAPI} from '../actions/apiActions'

class DefaultSearch extends React.Component {

  render () {
    let searchResults;
    if (this.props.results) {
      searchResults = (
        <div>
        <p>{this.props.results.name}</p>
        <p>{this.props.results.desc}</p>
        <p>{this.props.results.range}</p>
        <p>{this.props.results.material}</p>
        <p>{this.props.results.level}</p>
        </div>
      )
    }
  
  return (
    <div>
    <h1>Home</h1>
    <p>Results: {searchResults}</p>

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
