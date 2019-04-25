import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/homeasdfasd/home";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
