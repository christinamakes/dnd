import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DefaultSearch from './components/search'

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={DefaultSearch} />
      </div>
    );
  }
}

export default App
