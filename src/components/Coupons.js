import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddCoupon from "./AddCoupon";
import { getCoupons } from "../thunks/couponThunks";
import Coupon from "./coupon";

class Coupons extends Component {
  constructor(props) {
    super(props);

    this.props.getCoupons();
  }

  render() {
    if (localStorage.getItem("token") !== null) {
      // debugger;
      const coupons = this.props.coupons.coupons.map((coupon, i) => (
        <Coupon key={i} coupon={coupon} />
      ));

      return (
        <Fragment>
          <AddCoupon />
          <div className="ui cards">{coupons}</div>
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  // debugger;
  return { coupons: state.couponsInfo };
};

const mapDispatchToProps = dispatch => {
  return { getCoupons: () => dispatch(getCoupons()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coupons);
