import React, { Component, Fragment } from "react";
import "./App.css";
import MeetupEvents from "./meetup_events";
import Registration from "./registration";
import Login from "./login";
import Coupons from "./Coupons";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Nav";
import { connect } from "react-redux";
import { getCurrentUser } from "../thunks/accountThunks";

// console.log("api key", process.env.REACT_APP_API_KEY_MEETUP);
class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    console.log(this.props.currentUser.isUserLoggedIn);
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <Route path="/events" component={MeetupEvents} />
          <Route
            path="/coupons"
            render={() =>
              this.props.currentUser.isUserLoggedIn ? (
                <Coupons />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                  }}
                />
              )
            }
          />
        </Switch>

        {this.props.location.pathname === "/" ? (
          <div className="welcome-banner">
            <div className="rootPage welcome-banner-picture" id="divLeft">
              <span className="welcomeText">
                <h1 className="ui header" id="rootHeader">
                  Become a Member
                </h1>
                <p className="mainGreeting">
                  From resources to gaining new skills, jumpstart a career in
                  tech through the Femmecubator community. Sign up Today.
                </p>
              </span>
              <div className="signup-button">
                <button
                  className="positive huge ui button"
                  onClick={this.clickHandler}
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
        ) : null}
      </Fragment>
    );
  }

  clickHandler = e => {
    this.props.history.push("/signup");
  };
}

const mapDispatchToProps = dispatch => {
  return { getCurrentUser: () => dispatch(getCurrentUser()) };
};

const mapStateToProps = state => {
  return { currentUser: state.accountInfo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
