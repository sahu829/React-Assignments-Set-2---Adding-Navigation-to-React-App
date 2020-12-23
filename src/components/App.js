import React, { Component, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Badpage from "./badpage";
import Home from "./home";
import LocationsDisplay from "./locationsDisplay";

class App extends Component {
  render() {
    return (
      <>
        <div id="main">{/* Do not remove the main div */}</div>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />

          <Route path="/" component={Badpage} />
        </Switch>

        <LocationsDisplay />
      </>
    );
  }
}

export default App;
export { LocationsDisplay };
