import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary pointing right menu">
          <div class="header item">Femmecubator</div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
