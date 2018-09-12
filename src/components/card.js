import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromURL} from '../actions/apiActions'

class Card extends React.Component {

     componentDidMount() {
         this.props.dispatch(getResultsFromURL(`${this.props.location.state.url}`))
     }

     render () {  
         let classes_destruc 
         const {name, page, desc, higher_level, range, material, duration, casting_time, level} = this.props.card;
         
         if (this.props.card.classes) {
           classes_destruc = this.props.card.classes.map((result, index) => 
           <div key={index}>
             <p>{result.name}</p>
           </div>
         )
       
       }

    return (
    <div>
        <h1>{name} Level {level}</h1>
        <p>Page: {page}</p>
        <p>Description: {desc}</p>
        <p>Higher level: {higher_level}</p>
        <p>Range: {range}</p>
        <p>Material: {material}</p>
        <p>Duration: {duration}</p>
        <p>Casting Time: {casting_time}</p>
        <p>Classes that use this spell: {classes_destruc}</p>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  results: state.api.results,
  card: state.api.URLresults ? state.api.URLresults : []
})

export default connect(mapStateToProps)(Card)
