import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import store from "./redux/store";
import { Provider } from "react-redux";
import Navigation from "./components/navigation/navigation";

//import Navigation from "./components/navigation/navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
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
