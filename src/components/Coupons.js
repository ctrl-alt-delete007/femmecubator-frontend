import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
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

    if (localStorage.getItem("token") !== null) {
      this.props.fetchCurrentUser();
      this.props.getCoupons();
    } else {
      this.props.history.push("/login");
    }

    this.filterHandler = this.filterHandler.bind(this);
  }

  render() {
    let filteredCoupons = [];
    if (this.state.q === "") {
      filteredCoupons = this.props.coupons.coupons || [{}];
    } else {
      filteredCoupons = this.props.coupons.coupons.filter(coupon =>
        coupon.description.toLowerCase().includes(this.state.q.toLowerCase())
      ) || [{}];
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
          <span className="header-title">Introducing Access Pass</span>
          <p className="header-subtitle">
            Get access to discounts offered by our partners.
          </p>
        </div>
        <FilterCoupons filterHandler={this.filterHandler} />

        <div className="coupon-contents">
          <div className="ui cards">{coupons}</div>
        </div>
      </Fragment>
    );
  }

  filterHandler(q) {
    this.setState({ q });
  }
}

const mapStateToProps = state => {
  return { coupons: state.couponsInfo, user: state.accountInfo };
  // return { coupons: state.couponsInfo };
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
