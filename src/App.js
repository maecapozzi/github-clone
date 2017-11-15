import React, { Component } from 'react'
import Home from './components/Home'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App
