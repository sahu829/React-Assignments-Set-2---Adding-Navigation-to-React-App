import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>

        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </>
    );
  }
}

export default App;
