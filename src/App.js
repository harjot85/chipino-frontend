import React, { Component } from "react";
import  Honeycomb  from './components/honeycomb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Chipino!</h1>
        <h3>The Meshworks</h3>
        <Honeycomb />
      </div>
    );
  }
}

export default App;
