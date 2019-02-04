import React, { Component } from "react";
import "./App.css";
import MeetupEvents from "./meetup_events";
import Registration from "./registration";
import Login from "./login";
import Coupons from "./Coupons";
import { Route, Switch } from "react-router-dom";

// console.log("api key", process.env.REACT_APP_API_KEY_MEETUP);
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/events" component={MeetupEvents} />
        <Route path="/coupons" component={Coupons} />
      </Switch>
    );
  }
}

export default App;
