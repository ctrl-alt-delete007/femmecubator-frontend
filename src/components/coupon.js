import React, { Component, Fragment } from "react";

class Coupon extends Component {
  render() {
    const { coupon } = this.props;
    return (
      <Fragment>
        <li>
          <div>{coupon.coupon_code}</div>
          <div>{coupon.sponsor}</div>
          <div>{coupon.description}</div>
          <div>{coupon.expiration}</div>
        </li>
      </Fragment>
    );
  }
}

export default Coupon;
