import React, { Component } from 'react'
import LayoutContainer from './components/LayoutContainer'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <LayoutContainer />
      </MuiThemeProvider>
    )
  }
}

export default App
