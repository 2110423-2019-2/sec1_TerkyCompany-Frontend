import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,

    }
  }

  componentDidMount() {
  }

  render() {
    if (this.state.isLoading) return null
    console.log("hello Homepage")
    return (
      <div className="App">
        <h1>Matcher</h1>
      </div>
    )
  }
}

export default App;