import React, { Component, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Badpage from "./badpage";
import Home from "./home";
import LoactionDisplay from "./locationDisplay";
//import NoMatch from "./noMatch";
//import NoPage from "./noPage";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Badpage} />
        </Switch>
        <LoactionDisplay />
      </>
    );
  }
}

export default App;
export { LoactionDisplay, Home, About, Badpage };
