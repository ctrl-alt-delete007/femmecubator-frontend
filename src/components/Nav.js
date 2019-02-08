import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/accountActions";
import { getCurrentUser } from "../thunks/accountThunks";

class NavBar extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { accountInfo: state.accountInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
