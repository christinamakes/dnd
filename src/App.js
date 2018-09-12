import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DefaultSearch from './components/search'
import Card from './components/card'

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={DefaultSearch} />
        <Route path="/card/:id" component={Card} />
      </div>
    );
  }
}

export default App
