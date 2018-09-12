import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromURL} from '../actions/apiActions'

class Card extends React.Component {

     componentDidMount() {
         this.props.dispatch(getResultsFromURL(`${this.props.location.state.url}`))
     }

  render () {
   
  
  return (
    <div>
    <h1>{this.props.card.name}</h1>
    <p>{this.props.card.desc}</p>

  </div>
  )}
}

const mapStateToProps = (state) => ({
  results: state.api.results,
  card: state.api.URLresults ? state.api.URLresults : []
})

export default connect(mapStateToProps)(Card)
