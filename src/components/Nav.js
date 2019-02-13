import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, isUserLoggedIn } from "../actions/accountActions";
import { withRouter, Redirect } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.props.isUserLoggedIn();

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  render() {
    return (
      <div className="ui inverted segment" id="navbar">
        <div className="ui inverted secondary pointing menu" id="innerNavBar">
          <div className="header item">
            <NavLink to="/">Femmecubator</NavLink>
          </div>
          <div className="right menu">
            <NavLink
              to="/coupons"
              className="item"
              activeClassName="item active"
            >
              Access Pass
            </NavLink>
            <NavLink
              to="/events"
              className="item"
              activeClassName="item active"
            >
              Events
            </NavLink>
            {localStorage.getItem("token") !== null ? (
              <div className="ui simple dropdown item">
                Account
                <i className="dropdown icon" />
                <div className="menu">
                  <NavLink className="item" to="/account">
                    View Account
                  </NavLink>
                  <NavLink className="item" to="/addCoupon">
                    Add Coupon
                  </NavLink>
                  <NavLink
                    className="item"
                    to="/logout"
                    isActive={this.logoutHandler}
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="item"
                activeClassName="item active"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }

  logoutHandler() {
    if (this.props.location.pathname === "/logout") {
      this.props.logout();
      this.props.history.push("/");
    }
  }
}

const mapStateToProps = state => {
  return { accountInfo: state.accountInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    isUserLoggedIn: () => dispatch(isUserLoggedIn())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
