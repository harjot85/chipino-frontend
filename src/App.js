import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import store from "./redux/store";
import { Provider } from "react-redux";
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='nav'>
            <ul>
              <li className='active'><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
