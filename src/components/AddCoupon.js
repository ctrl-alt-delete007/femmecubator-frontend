import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createCoupon } from "../thunks/couponThunks";
import { fetchCurrentUser } from "../thunks/accountThunks";
class AddCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon_code: "",
      sponsor: "",
      description: "",
      expiration: ""
    };

    this.props.fetchCurrentUser();

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.submitHandler}>
          <ul>
            <li className="accountForms">
              <label htmlFor="coupon_code">Coupon Code: </label>
              <input
                type="text"
                onChange={this.changeHandler}
                name="coupon_code"
                id="coupon_code"
                value={this.state.coupon_code}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="sponsor">Sponsor: </label>
              <input
                type="text"
                onChange={this.changeHandler}
                name="sponsor"
                id="sponsor"
                value={this.state.sponsor}
              />
            </li>
            <li className="accountForms">
              <label htmlFor="description">Description: </label>
              <input
                type="textarea"
                onChange={this.changeHandler}
                name="description"
                value={this.state.description}
                id="description"
              />
            </li>
            <li className="accountForms">
              <label htmlFor="expiration">Expiration Date: </label>
              <input
                type="date"
                onChange={this.changeHandler}
                name="expiration"
                id="expiration"
                value={this.state.expiration}
              />
            </li>
            <li className="accountForms">
              <input type="submit" value="submit" />
            </li>
          </ul>
        </form>
      </Fragment>
    );
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const couponInfo = {
      ...this.state,
      member_id: this.props.currentUser.membershipInfo.id
    };
    this.props.createCoupon(couponInfo);
    this.setState({
      coupon_code: "",
      sponsor: "",
      description: "",
      expiration: ""
    });
    e.target.reset();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCoupon: couponInfo => dispatch(createCoupon(couponInfo)),
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  };
};

const mapStateToProps = state => {
  return { currentUser: state.accountInfo.currentUser };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCoupon);
