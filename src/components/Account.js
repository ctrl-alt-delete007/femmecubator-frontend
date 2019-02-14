import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentUserFromStore } from "../actions/accountActions";
import Wishlists from "./Wishlists";
import EditAccountInfo from "./EditAccountInfo";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab1: true,
      tab2: false
    };

    this.props.getCurrentUserFromStore();
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div
          onClick={this.clickHandler}
          className="ui top attached tabular menu"
        >
          <button
            name="t1"
            className={
              this.state.tab1 ? "item active link-button" : "item link-button"
            }
          >
            My Wishlist
          </button>
          <button
            name="t2"
            className={
              this.state.tab2 ? "item active link-button" : "item link-button"
            }
          >
            Edit Account
          </button>
        </div>
        <div className="ui bottom attached segment">
          {this.state.tab1 ? (
            <Wishlists />
          ) : (
            <EditAccountInfo currentUser={this.props.currentUser} />
          )}
        </div>
      </Fragment>
    );
  }

  clickHandler(e) {
    if (e.target.name === "t1") {
      this.setState({ tab1: true, tab2: false });
    } else if (e.target.name === "t2") {
      this.setState({ tab1: false, tab2: true });
    }
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
