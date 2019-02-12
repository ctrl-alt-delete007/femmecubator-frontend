import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddCoupon from "./AddCoupon";
import { getCoupons } from "../thunks/couponThunks";
import Coupon from "./coupon";
import FilterCoupons from "./FilterCoupons";

const divStyle = {
  width: "272px !important",
  height: "262.531px !important",
  left: "952.5px"
};

class Coupons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: ""
    };

    this.props.getCoupons();

    this.filterHandler = this.filterHandler.bind(this);
    this.addCouponHandler = this.addCouponHandler.bind(this);
  }

  render() {
    if (localStorage.getItem("token") !== null) {
      let filteredCoupons = [];
      if (this.state.q === "") {
        filteredCoupons = this.props.coupons.coupons;
      } else {
        filteredCoupons = this.props.coupons.coupons.filter(coupon =>
          coupon.description.toLowerCase().includes(this.state.q.toLowerCase())
        );
      }
      const coupons = filteredCoupons.map((coupon, i) => (
        <Coupon key={i} coupon={coupon} />
      ));
      return (
        <Fragment>
          <div id="social">
            <a
              className="fbook"
              onClick={this.addCouponHandler}
              title="facebook"
            />
          </div>
          <div className="Introducing-Access-P">
            <span>Introducing Access Pass</span>
            <p>Get access to discounts offered by our partners.</p>
          </div>
          <AddCoupon />
          <FilterCoupons filterHandler={this.filterHandler} />

          <div className="ui segment" id="coupon-container">
            <div className="right ui rail">
              <div className="ui sticky" style={divStyle}>
                <h3 className="ui header">Stuck Content</h3>
              </div>
            </div>
            <div className="coupon-contents">
              <div className="ui cards">{coupons}</div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }

  filterHandler(q) {
    this.setState({ q });
  }

  addCouponHandler() {}
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
