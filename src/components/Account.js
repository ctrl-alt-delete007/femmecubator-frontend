import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentUserFromStore } from "../actions/accountActions";

class Account extends Component {
  constructor(props) {
    super(props);

    this.props.getCurrentUserFromStore();
  }

  render() {
    console.log("current user", this.props);
    return <Fragment>{}</Fragment>;
  }
}

const mapStateToProps = state => {
  return { currentUser: state.accountInfo.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { getCurrentUserFromStore: () => dispatch(getCurrentUserFromStore()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
