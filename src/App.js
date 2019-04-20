import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home";
import store from "./redux/store";
import { Provider } from "react-redux";
import  Honeycomb  from './components/honeycomb'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Honeycomb/>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
