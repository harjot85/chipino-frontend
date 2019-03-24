import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/footer" component={Footer} />
      </Router>
    );
  }
}

export default App;
