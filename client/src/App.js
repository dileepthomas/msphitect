import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Checkout from "./components/pages/checkout";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
