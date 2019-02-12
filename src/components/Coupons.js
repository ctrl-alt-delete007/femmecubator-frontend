import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddCoupon from "./AddCoupon";
import { getCoupons } from "../thunks/couponThunks";
import { fetchCurrentUser } from "../thunks/accountThunks";
import Coupon from "./coupon";
import FilterCoupons from "./FilterCoupons";

class Coupons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: ""
    };

    this.props.getCoupons();
    this.props.fetchCurrentUser();

    this.filterHandler = this.filterHandler.bind(this);
    this.addCouponHandler = this.addCouponHandler.bind(this);
  }

  render() {
    console.log();
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
        <Coupon
          key={i}
          coupon={coupon}
          user={this.props.user.currentUser.membershipInfo || {}}
        />
      ));

      return (
        <Fragment>
          {/* <div id="social">
            <a
              className="fbook"
              onClick={this.addCouponHandler}
              title="facebook"
            />
          </div> */}

          <div className="Introducing-Access-P">
            <span>Introducing Access Pass</span>
            <p>Get access to discounts offered by our partners.</p>
          </div>

          <AddCoupon />
          <FilterCoupons filterHandler={this.filterHandler} />

          <div className="coupon-contents">
            <div className="ui cards">{coupons}</div>
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
  return { coupons: state.couponsInfo, user: state.accountInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoupons: () => dispatch(getCoupons()),
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coupons);
