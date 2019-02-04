import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddCoupon from "./AddCoupon";

class Coupons extends Component {
  render() {
    return (
      <Fragment>
        <AddCoupon />
      </Fragment>
    );
  }
}

export default connect()(Coupons);
