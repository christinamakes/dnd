import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DefaultSearch from './components/search'
import MakeItem from './components/makeItem'
import RandomTable from './components/randomTable'
import Card from './components/card'
import Battle from './components/battle'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={DefaultSearch} />
        <Route exact path='/generate' component={MakeItem} />
        <Route exact path='/random' component={RandomTable} />
        <Route path="/card/:id" component={Card} />
        <Route path="/battle" component={Battle} />
      </div>
    );
  }
}

export default App
