import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromAPI} from '../actions/apiActions'

class Card extends React.Component {

  render () {
    let searchResults;
    if (this.props.results) {
      searchResults = (
        <div>
        <p>This is the card for {this.props.results.name}</p>
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

export default connect(mapStateToProps)(Card)
