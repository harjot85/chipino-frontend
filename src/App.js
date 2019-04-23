import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import store from "./redux/store";
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        <Router>
           <div>
            {/* <ul style={{ background:'turquoise', display: 'flex', 'justify-content':'space-around', 'list-style-type':'none'}}>
              <li><Link to="/">Home</Link></li> |
              <li><Link to="/projects">Projects</Link></li> |
              <li><Link to="/contact">Contact</Link></li> |
              <li><Link to="/about">About</Link></li>
            </ul>  */}
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
