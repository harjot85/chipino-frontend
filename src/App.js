import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Navigation from "./components/navigation/navigation";
import './style.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
        <Router>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
