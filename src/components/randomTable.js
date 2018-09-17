import React from 'react'
import { connect } from 'react-redux'
import {getResultsFromURL} from '../actions/apiActions'
import { Link } from "react-router-dom"

class randomTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableElements: [{value:'wizard'}, {value: 'warlock'}, {value: 'rogue'}]
        };
      }

    generateNumber(max) {
        console.log(Math.floor(Math.random() * Math.floor(max)));
    }  

     render () {
         let tableContents;
         tableContents = this.state.tableElements.map((table, index) => 
        <div key={index}>
          <p>{table.value}</p>
        </div>
      )
         

    return (
    <div>
        <Link to={`/`}>Home</Link>
        <p>Random Table</p>
        <button onClick={() => this.generateNumber(10)}>Generate</button>
        {tableContents}
    </div>
  )}
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(randomTable)
