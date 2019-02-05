import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class NavBar extends Component {
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
            <NavLink to="/login" className="item" activeClassName="item active">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
