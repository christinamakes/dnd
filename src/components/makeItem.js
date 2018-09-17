import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromURL} from '../actions/apiActions'
import { Link } from "react-router-dom"

class makeItem extends React.Component {

     render () {  
         

    return (
    <div>
        <Link to={`/`}>Home</Link>
        <p>Generate an item</p>
    </div>
  )}
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(makeItem)
