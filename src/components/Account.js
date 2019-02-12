import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentUserFromStore } from "../actions/accountActions";

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
          <a name="t1" className={this.state.tab1 ? "item active" : "item"}>
            Tab 1
          </a>
          <a name="t2" className={this.state.tab2 ? "item active" : "item"}>
            Tab 2
          </a>
        </div>
        <div className="ui bottom attached segment">
          {this.state.tab1 ? "tab1" : "tab2"}
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
