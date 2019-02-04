import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddCoupon from "./AddCoupon";
import { getCoupons } from "../thunks/couponThunks";
import Coupon from "./coupon";

class Coupons extends Component {
  componentDidMount() {
    this.props.getCoupons();
  }
  render() {
    const coupons = this.props.coupons.map((coupon, i) => (
      <Coupon key={i} coupon={coupon} />
    ));

    return (
      <Fragment>
        <AddCoupon />
        <ul>{coupons}</ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { coupons: state.couponsInfo.coupons };
};

const mapDispatchToProps = dispatch => {
  return { getCoupons: () => dispatch(getCoupons()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coupons);
