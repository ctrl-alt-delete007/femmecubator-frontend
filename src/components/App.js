import React, { Component, Fragment } from "react";
import "./App.css";
import MeetupEvents from "./meetup_events";
import Registration from "./registration";
import Login from "./login";
import Coupons from "./Coupons";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Nav";

// console.log("api key", process.env.REACT_APP_API_KEY_MEETUP);
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <Route path="/events" component={MeetupEvents} />
          <Route path="/coupons" component={Coupons} />
        </Switch>

        {this.props.location.pathname === "/" ? (
          <div>
            <div className="rootPage" id="divLeft">
              adfad
            </div>
            <div className="rootPage" id="divRight">
              <img
                src={require("../images/mimi-thian-737626-unsplash.jpg")}
                alt="witi_mainpage_pic"
                className="ui fluid image"
              />
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default App;
