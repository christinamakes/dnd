import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromURL} from '../actions/apiActions'
import { Link } from "react-router-dom"

class randomTable extends React.Component {

     render () {  
         

    return (
    <div>
        <Link to={`/`}>Home</Link>
        <p>Random Table</p>
    </div>
  )}
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(randomTable)
