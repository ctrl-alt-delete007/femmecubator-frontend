import React, { Component } from "react";

class Coupon extends Component {
  render() {
    const { coupon } = this.props;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{coupon.sponsor}</div>
          <div className="description">{coupon.description}</div>
          <div className="description">{coupon.expiration}</div>
          <div className="ui bottom attached button">
            <i className="add icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Coupon;
