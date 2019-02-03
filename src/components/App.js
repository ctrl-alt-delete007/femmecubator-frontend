import React, { Component, Fragment } from "react";
import "./App.css";
import Container from "./container";
import Registration from "./registration";

// console.log("api key", process.env.REACT_APP_API_KEY_MEETUP);
class App extends Component {
  render() {
    return (
      <Fragment>
        <Registration />
        <Container />
      </Fragment>
    );
  }
}

export default App;
