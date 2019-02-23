import React, { Component, Fragment } from "react";
import "./App.css";
import MeetupEvents from "./meetup_events";
import Account from "./Account";
import Registration from "./registration";
import Login from "./login";
import Coupons from "./Coupons";
import AddCoupon from "./AddCoupon";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./Nav";
// require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/addCoupon" component={AddCoupon} />
          <Route path="/coupons" component={Coupons} />
          <Route path="/events" component={MeetupEvents} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
        </Switch>

        {this.props.location.pathname === "/" ? (
          <Fragment>
            <div className="welcome-banner">
              <div className="rootPage welcome-banner-picture" id="divLeft">
                <span className="welcomeText">
                  <h1 className="ui header" id="rootHeader">
                    Become a Member
                  </h1>
                  <p className="welcome-greeting">
                    From resources to gaining new skills, jumpstart a career in
                    tech through the Femmecubator community. Sign up Today.
                  </p>
                </span>
                <div className="signup-button">
                  <button
                    id="signup-btn"
                    className={
                      localStorage.getItem("token") === null
                        ? "positive huge ui button"
                        : "positive huge ui disabled button"
                    }
                    onClick={this.signupHandler}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="rootPage welcome-banner-text" id="divRight">
                <img
                  src={require("../images/mimi-thian-737626-unsplash.jpg")}
                  alt="witi_mainpage_pic"
                  className="ui fluid image"
                />
              </div>
            </div>
            <div className="background">
              <div className="Section-Title">
                Join a network of Women in Tech
              </div>
            </div>
          </Fragment>
        ) : null}
      </Fragment>
    );
  }

  signupHandler = () => {
    this.props.history.push("/signup");
  };
}
// Testing pull request

export default withRouter(App);
