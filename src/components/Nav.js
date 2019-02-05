import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing menu">
          <NavLink to="/coupons" className="item" activeClassName="item active">
            Access Pass
          </NavLink>
          <NavLink to="/events" className="item" activeClassName="item active">
            Events
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
